import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiDestroyService } from '@taiga-ui/cdk';
import {
  TuiAlertService,
  TuiAppearance,
  tuiButtonOptionsProvider,
  TuiDialogContext,
  TuiNotification,
  TUI_TEXTFIELD_APPEARANCE,
} from '@taiga-ui/core';
import {
  ExamScheduleModel,
  UpdateExamModel,
} from '@teaching-scheduling-system/web/shared/data-access/models';
import {
  AppShellState,
  selectRooms,
} from '@teaching-scheduling-system/web/shared/data-access/store';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { Observable, takeUntil, tap } from 'rxjs';
import { AssignEditExamDialogStore } from './store';

@Component({
  templateUrl: './assign-edit-dialog.component.html',
  styleUrls: ['./assign-edit-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AssignEditExamDialogStore,
    TuiDestroyService,
    tuiButtonOptionsProvider({
      appearance: 'primary',
      size: 'm',
    }),
    {
      provide: TUI_TEXTFIELD_APPEARANCE,
      useValue: TuiAppearance.Textfield,
    },
  ],
})
export class AssignEditDialogComponent {
  /** PUBLIC PROPERTIES */
  public form!: FormGroup;
  public readonly rooms$: Observable<string[]>;
  public readonly status$ = this.store.status$;

  /** GETTERS */
  private get roomControl(): FormControl {
    return this.form.controls['idRoom'] as FormControl;
  }

  /** CONSTRUCTOR */
  constructor(
    private readonly fb: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string, ExamScheduleModel>,
    private readonly store: AssignEditExamDialogStore,
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
    private readonly destroy$: TuiDestroyService,
    appShellStore: Store<AppShellState>
  ) {
    this.rooms$ = appShellStore
      .select(selectRooms)
      .pipe(takeUntil(this.destroy$));

    this.initForm();
    this.handleStatusChange();
  }

  /** PUBLIC METHODS */
  public confirm(): void {
    this.store.update({
      examId: this.context.data.id,
      body: this.form.value as UpdateExamModel,
    });
  }

  public cancel(): void {
    setTimeout(() => {
      this.context.$implicit.complete();
    });
  }

  /** PRIVATE METHODS */
  private initForm(): void {
    this.form = this.fb.group({
      idRoom: ['', Validators.required],
    });
  }

  private handleStatusChange(): void {
    this.status$
      .pipe(
        tap((status) => {
          if (status === 'successful') {
            this.alertService
              .open(
                `???? c???p nh???t th??nh c??ng ph??ng thi ${this.context.data.name}`,
                { status: TuiNotification.Success }
              )
              .subscribe();
            setTimeout(() => {
              this.context.completeWith(this.roomControl.value);
            });
          } else if (status === 'systemError') {
            this.alertService
              .open('Vui l??ng th??? l???i sau', {
                label: 'L???i h??? th???ng!',
                status: TuiNotification.Error,
              })
              .subscribe();
          }
        })
      )
      .subscribe();
  }
}
