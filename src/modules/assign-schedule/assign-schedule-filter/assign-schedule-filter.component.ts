import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { CoreConstant } from '@constants/core/core.constant';
import { AcademicYear } from '@models/core/academic-year.model';
import { BaseComponent } from '@modules/core/base/base.component';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { ArrayHelper } from 'src/shared/helpers/array.helper';
import * as fromAssignSchedule from '../state';
import * as fromAppShell from '@modules/core/components/app-shell/state';

@Component({
  selector: 'tss-assign-schedule-filter',
  templateUrl: './assign-schedule-filter.component.html',
  styleUrls: ['./assign-schedule-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignScheduleFilterComponent
  extends BaseComponent
  implements OnInit
{
  /** PUBLIC PROPERTIES */
  public expanded = true;
  public form!: FormGroup;
  public currentTerm$: Observable<string>;
  public academicYears$: Observable<AcademicYear>;
  public trainingTypes$: Observable<string[]>;
  public trainingTypeChange$ = new BehaviorSubject<string>('');
  public schoolYears$!: Observable<string[]>;
  public department$: Observable<string | undefined>;
  public filter$ = new Subject();

  public readonly termsInYear = CoreConstant.TERMS_IN_YEAR;
  public readonly batchesInTerm = CoreConstant.BATCHES_IN_TERM;

  /** GETTERS */
  public get termInYear(): AbstractControl | null {
    return this.form.get('termInYear');
  }

  public get trainingType(): AbstractControl | null {
    return this.form.get('trainingType');
  }

  private get schoolYear(): AbstractControl | null {
    return this.form.get('schoolYear');
  }

  private get batchInTerm(): AbstractControl | null {
    return this.form.get('batchInTerm');
  }

  /** CONSTRUCTOR */
  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<fromAssignSchedule.AssignScheduleState>,
    appShellStore: Store<fromAppShell.AppShellState>
  ) {
    super();

    this.currentTerm$ = this.store
      .select(fromAssignSchedule.selectSchoolYear)
      .pipe(takeUntil(this.destroy$));

    this.academicYears$ = this.store
      .select(fromAssignSchedule.selectAcademicYear)
      .pipe(takeUntil(this.destroy$));

    this.trainingTypes$ = this.store
      .select(fromAssignSchedule.selectTrainingType)
      .pipe(takeUntil(this.destroy$));

    this.department$ = appShellStore
      .select(fromAppShell.selectDepartment)
      .pipe(takeUntil(this.destroy$));

    this.initForm();
    this.triggerSchoolYearChange();
    this.handleTrainingTypeChange();
    this.handleFilter();
  }

  /** LIFE CYCLE */
  public ngOnInit(): void {
    this.store.dispatch(fromAssignSchedule.loadSchoolYear());
    this.store.dispatch(fromAssignSchedule.loadAcademicYear());
  }

  /** PUBLIC METHODS */
  public onTermInYearChange(termInYear: number): void {
    const selectedBatchInTerm = this.batchInTerm?.value as number;
    if (!this.batchesInTerm[termInYear]?.includes(selectedBatchInTerm)) {
      this.batchInTerm?.setValue(1);
    }
  }

  public onToggle(): void {
    this.expanded = !this.expanded;
  }

  /** PRIVATE METHODS */
  private initForm(): void {
    combineLatest([this.currentTerm$, this.academicYears$])
      .pipe(
        withLatestFrom(this.trainingTypes$),
        tap(([[currentTerm, academicYears], trainingTypes]) => {
          this.form = this.fb.group({
            schoolYear: currentTerm.substr(0, currentTerm.length - 2),
            termInYear: currentTerm.slice(-1),
            batchInTerm: 1,
            trainingType: trainingTypes[0],
            academicYear:
              ArrayHelper.lastItem(academicYears[trainingTypes?.[0]]) ?? [],
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private triggerSchoolYearChange(): void {
    this.schoolYears$ = this.currentTerm$.pipe(
      map((currentTerm) => this.generateSchoolYears(currentTerm))
    );
  }

  private handleTrainingTypeChange(): void {
    this.trainingTypeChange$
      .pipe(
        withLatestFrom(this.academicYears$),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tap(([_, academicYears]) => {
          this.form
            .get('academicYear')
            ?.setValue(
              ArrayHelper.lastItem(
                academicYears[this.trainingType?.value as string]
              )
            );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private handleFilter(): void {
    this.filter$
      .pipe(
        withLatestFrom(this.department$),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        map(([_, dep]) => dep),
        tap((dep) => {
          if (!dep) return;
          const schoolYear = ((this.schoolYear?.value as string) ?? '')
            .split('-')
            .join('_');
          const term = (this.termInYear?.value as string) ?? '';
          this.store.dispatch(
            fromAssignSchedule.filter({
              dep,
              params: {
                ss: this.batchInTerm?.value as number,
                term: `${schoolYear}_${term}`,
              },
            })
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private generateSchoolYears(currentTerm: string): string[] {
    const curr = +currentTerm.split('-')[0];
    const result = [];

    for (let i = 0; i < 3; i++) {
      result.unshift(`${curr - i}-${curr - i + 1}`);
    }

    return result;
  }
}
