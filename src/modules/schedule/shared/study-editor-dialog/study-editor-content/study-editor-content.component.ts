import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '@modules/core/base/base.component';
import { Store } from '@ngrx/store';
import { DialogService } from '@services/dialog/dialog.service';
import { CoreConstant } from '@shared/constants';
import { EApiStatus } from '@shared/enums';
import {
  ChangeStatusHelper,
  DateHelper,
  ObservableHelper,
} from '@shared/helpers';
import { FormHelper } from '@shared/helpers/form.helper';
import {
  Nullable,
  FixedScheduleModel,
  SimpleFixedScheduleModel,
  EjsScheduleModel,
  SimpleModel,
} from '@shared/models';
import { sameGroupStaticValueValidator } from '@shared/validators';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import {
  TUI_BUTTON_OPTIONS,
  TuiAppearance,
  TuiNotificationsService,
  TuiNotification,
} from '@taiga-ui/core';
import { Observable, Subject, iif, of } from 'rxjs';
import {
  takeUntil,
  tap,
  mergeMap,
  withLatestFrom,
  map,
  filter,
} from 'rxjs/operators';
import * as fromStudyEditorDialog from './state';
import * as fromAppShell from '@modules/core/components/app-shell/state';
import { StudyEditorButtonsRightComponent } from './study-editor-buttons-right/study-editor-buttons-right.component';

@Component({
  selector: 'tss-study-editor-content',
  templateUrl: './study-editor-content.component.html',
  styleUrls: ['./study-editor-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    FormHelper,
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        shape: null,
        appearance: TuiAppearance.Primary,
        size: 'm',
      },
    },
  ],
})
export class StudyEditorContentComponent
  extends BaseComponent
  implements OnInit
{
  /** INPUT */
  @Input() public schedule!: EjsScheduleModel;

  /** OUTPUT */
  @Output() public updateSchedule = new EventEmitter<FixedScheduleModel>();
  @Output() public changeScheduleInfo =
    new EventEmitter<fromStudyEditorDialog.Change>();
  @Output() public cancelRequest = new EventEmitter();
  @Output() public cancel = new EventEmitter();

  /** VIEWCHILD */
  @ViewChild(StudyEditorButtonsRightComponent)
  public rightButtonComponent!: StudyEditorButtonsRightComponent;

  /** PUBLIC PROPERTIES */
  public form!: FormGroup;
  public isPersonal!: boolean;
  public validRequestChangeSchedule!: boolean;
  public firstDateAllowRequestChange!: Date;
  public requestedChangeSchedule: Nullable<FixedScheduleModel> = null;
  public requestChangeToUndeterminedDay = false;
  public changed = false;

  public readonly changeStatus$: Observable<EApiStatus>;
  public readonly requestStatus$: Observable<EApiStatus>;
  public readonly updateStatus$: Observable<EApiStatus>;
  public readonly cancelStatus$: Observable<EApiStatus>;
  public readonly requestingChangeSchedule$: Observable<boolean>;
  public readonly justRequestedSchedule$: Observable<
    Nullable<SimpleFixedScheduleModel>
  >;

  public readonly cancelRequest$ = new Subject();

  public readonly EApiStatus = EApiStatus;
  public readonly CoreConstant = CoreConstant;

  /** PRIVATE PROPERTIES */
  private readonly change$: Observable<fromStudyEditorDialog.Change>;
  private readonly nameTitle$: Observable<string>;

  /** GETTERS */
  public get requestControl(): FormGroup {
    return this.form.controls['request'] as FormGroup;
  }

  private get roomControlValue(): string {
    return this.requestControl.controls['room'].value as string;
  }

  private get shiftControlValue(): string {
    return this.requestControl.controls['shift'].value as string;
  }

  private get dateControlValue(): TuiDay {
    return this.requestControl.controls['date'].value as TuiDay;
  }

  /** CONSTRUCTOR */
  constructor(
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef,
    private readonly store: Store<fromStudyEditorDialog.StudyEditorDialogState>,
    private readonly formHelper: FormHelper,
    private readonly dialogService: DialogService,
    @Inject(TuiNotificationsService)
    private readonly notificationsService: TuiNotificationsService,
    appShellStore: Store<fromAppShell.AppShellState>
  ) {
    super();

    this.assignSubjects([this.cancelRequest$]);

    this.changeStatus$ = store
      .select(fromStudyEditorDialog.selectChangeStatus)
      .pipe(takeUntil(this.destroy$));
    this.requestStatus$ = store
      .select(fromStudyEditorDialog.selectRequestStatus)
      .pipe(takeUntil(this.destroy$));
    this.updateStatus$ = store
      .select(fromStudyEditorDialog.selectUpdateStatus)
      .pipe(takeUntil(this.destroy$));
    this.cancelStatus$ = store
      .select(fromStudyEditorDialog.selectCancelStatus)
      .pipe(takeUntil(this.destroy$));
    this.requestingChangeSchedule$ = store
      .select(fromStudyEditorDialog.selectRequestingChangeSchedule)
      .pipe(takeUntil(this.destroy$));
    this.justRequestedSchedule$ = store
      .select(fromStudyEditorDialog.selectJustRequestedSchedule)
      .pipe(takeUntil(this.destroy$));
    this.change$ = store
      .select(fromStudyEditorDialog.selectChange)
      .pipe(takeUntil(this.destroy$));
    this.nameTitle$ = appShellStore
      .select(fromAppShell.selectNameTitle)
      .pipe(takeUntil(this.destroy$));
  }

  /** LIFE CYCLE */
  public ngOnInit(): void {
    this.initForm();

    this.handleStatusChange();
    this.handleJustRequestedScheduleChange();
    this.handleChange();
    this.handleCancelRequest();

    this.requestedChangeSchedule =
      this.schedule.FixedSchedules?.find((x) =>
        ChangeStatusHelper.isPending(x.status)
      ) || null;

    (this.form.controls['change'] as FormGroup).controls['note'].valueChanges
      .pipe(
        withLatestFrom(this.requestingChangeSchedule$),
        filter(({ 1: requestingChangeSchedule }) => !requestingChangeSchedule),
        tap(() => this.rightButtonComponent.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /** PUBLIC METHODS */
  public toggleRequestArea(open: boolean): void {
    this.store.dispatch(fromStudyEditorDialog.toggleRequestChange({ open }));
  }

  public onUpdate(): void {
    const id = this.schedule.Id;
    const body = {
      note: (this.form.controls['change'] as FormGroup).controls['note']
        .value as string,
    };

    this.store.dispatch(fromStudyEditorDialog.update({ id, body }));
  }

  public showNotificationError(): void {
    this.notificationsService
      .show('Hãy thử lại sau', {
        label: 'Đã có lỗi xảy ra',
        status: TuiNotification.Error,
      })
      .subscribe();
  }

  /** PRIVATE METHODS */
  private initForm(): void {
    const data = this.schedule;

    const startDate = data.StartTime as Date;
    const endDate = data.EndTime as Date;
    const today = new Date();
    const startTuiDate = startDate
      ? DateHelper.toTuiDay(startDate)
      : DateHelper.toTuiDay(today);
    const endTuiDate = endDate
      ? DateHelper.toTuiDay(endDate)
      : DateHelper.toTuiDay(today);
    const room = data.Location;

    const todayToZero = DateHelper.dateAtZero(today);
    this.firstDateAllowRequestChange = DateHelper.subtract(todayToZero, 14);
    this.isPersonal = data.People?.[0] === 'self';
    this.validRequestChangeSchedule =
      startDate >= new Date(2022, 2, 1) || !this.isPersonal;

    const initialRequest = this.isPersonal
      ? {
          date: startTuiDate,
          shift: data.Shift ?? '1',
          online: room === 'PHTT',
        }
      : {
          date: startTuiDate,
          shift: data.Shift ?? '1',
          room: room,
        };

    const initialChange = {
      note: data.Note ?? '',
    };

    this.form = this.fb.group({
      id: [data.Id],
      subject: [data.Subject],
      location: [room],
      people: [
        typeof data.People?.[0] === 'string'
          ? data.People?.[0]
          : (data.People?.[0] as SimpleModel).name,
      ],
      start: [[startTuiDate, DateHelper.beautifyTime(startDate ?? today)]],
      end: [[endTuiDate, DateHelper.beautifyTime(endDate ?? today)]],
      request: this.fb.group(
        {
          shift: [initialRequest.shift],
          date: [initialRequest.date, Validators.required],
          online: [initialRequest.online],
          room: [room, this.isPersonal ? [] : [Validators.required]],
          reason: [
            '',
            this.isPersonal
              ? [
                  Validators.required,
                  Validators.maxLength(
                    this.CoreConstant.REASON_CHANGE_SCHEDULE_MAX_LENGTH
                  ),
                ]
              : [],
          ],
        },
        {
          validators: sameGroupStaticValueValidator(initialRequest, {
            date: (a: Nullable<TuiDay>, b: Nullable<TuiDay>) =>
              !!a && !!b && a.daySame(b),
          }),
        }
      ),
      requestIntend: this.fb.group({
        intendTime: [
          '',
          [
            Validators.required,
            Validators.maxLength(
              CoreConstant.INTEND_TIME_CHANGE_SCHEDULE_MAX_LENGTH
            ),
          ],
        ],
        reason: [
          '',
          [
            Validators.required,
            Validators.maxLength(
              this.CoreConstant.REASON_CHANGE_SCHEDULE_MAX_LENGTH
            ),
          ],
        ],
      }),
      change: this.getNewChangeControl(initialChange),
    });

    this.store.dispatch(fromStudyEditorDialog.reset({ change: initialChange }));
  }

  private handleStatusChange(): void {
    this.updateStatus$
      .pipe(
        tap((status) => {
          switch (status) {
            case EApiStatus.successful:
              this.changed = true;
              this.showNotificationUpdateSuccessful();
              break;
            case EApiStatus.systemError:
              this.showNotificationError();
              break;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.requestStatus$
      .pipe(
        tap((status) => {
          switch (status) {
            case EApiStatus.successful:
              this.showNotificationRequestChangeSuccessful();
              break;
            case EApiStatus.systemError:
              this.showNotificationError();
              break;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.changeStatus$
      .pipe(
        tap((status) => {
          switch (status) {
            case EApiStatus.successful: {
              this.changed = true;
              const [start, end] = DateHelper.fromShift(
                this.dateControlValue.toUtcNativeDate(),
                this.shiftControlValue
              );
              this.form.patchValue({
                location: this.roomControlValue,
                start: [
                  DateHelper.toTuiDay(start),
                  DateHelper.beautifyTime(start),
                ],
                end: [DateHelper.toTuiDay(end), DateHelper.beautifyTime(end)],
              });
              this.showNotificationUpdateSuccessful();
              break;
            }
            case EApiStatus.systemError:
              this.showNotificationError();
              break;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.cancelStatus$
      .pipe(
        filter((status) => status === EApiStatus.successful),
        tap(() => {
          this.requestedChangeSchedule = null;
          this.cancelRequest.emit();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private handleJustRequestedScheduleChange(): void {
    this.justRequestedSchedule$
      .pipe(
        mergeMap((request) =>
          iif(
            () => request !== null,
            of(request).pipe(
              ObservableHelper.filterNullish(),
              tap((request) => {
                const controls = this.form.controls;
                this.updateSchedule.emit({
                  ...request,
                  idSchedule: this.schedule.Id,
                  oldDate: (
                    controls['start'].value as [TuiDay, TuiTime]
                  )[0].getFormattedDay('YMD', '-'),
                  oldIdRoom: controls['location'].value as string,
                  oldShift: this.schedule.Shift ?? '1',
                  isNew: true,
                });
              })
            )
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private handleCancelRequest(): void {
    this.cancelRequest$
      .pipe(
        withLatestFrom(this.nameTitle$),
        map(({ 1: title }) => title),
        tap((title) => {
          this.dialogService
            .showConfirmDialog({
              header: `${title} có chắc chắn muốn hủy yêu cầu này không?`,
              positive: 'Có',
              negative: 'Không',
            })
            .pipe(
              filter((x) => x),
              map(
                () =>
                  this.schedule.FixedSchedules?.find((x) =>
                    ChangeStatusHelper.isPending(x.status)
                  )?.id
              ),
              ObservableHelper.filterNullish(),
              tap((id) => {
                this.store.dispatch(fromStudyEditorDialog.cancel({ id }));
              })
            )
            .subscribe();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private handleChange(): void {
    this.change$
      .pipe(
        tap((change) => {
          this.form.controls['change'] = this.getNewChangeControl(change);
          this.changeScheduleInfo.emit(change);
          this.cdr.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private showNotificationRequestChangeSuccessful(): void {
    this.notificationsService
      .show('Hãy chờ phản hồi của trưởng bộ môn', {
        label: 'Gửi yêu cầu thành công',
        status: TuiNotification.Success,
      })
      .subscribe();
  }

  private showNotificationUpdateSuccessful(): void {
    this.notificationsService
      .show('Cập nhật lịch thành công!', {
        status: TuiNotification.Success,
      })
      .subscribe();
  }

  private getNewChangeControl(value: fromStudyEditorDialog.Change): FormGroup {
    return this.formHelper.createNewFormGroup(
      {
        note: [value.note],
      },
      sameGroupStaticValueValidator(value, {
        date: (a: Nullable<TuiDay>, b: Nullable<TuiDay>) =>
          !!a && !!b && a.daySame(b),
      })
    );
  }
}
