import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { defaultSort } from '@taiga-ui/addon-table';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { CoreConstant } from '@teaching-scheduling-system/core/data-access/constants';
import { EApiStatus } from '@teaching-scheduling-system/web/shared/data-access/enums';
import { ModuleClass } from '@teaching-scheduling-system/web/shared/data-access/models';
import {
  TeachingScheduleAssignState,
  teachingScheduleAssign_ChangeSelected,
  teachingScheduleAssign_SelectFilterStatus,
} from '@teaching-scheduling-system/web/teaching-schedule/data-access';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'tss-assign-table',
  templateUrl: './assign-table.component.html',
  styleUrls: ['./assign-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class AssignTableComponent implements OnChanges {
  /** INPUT */
  @Input() public data!: ModuleClass[];
  @Input() public excludeTeacher = false;

  /** PUBLIC PROPERTIES */
  public form!: FormGroup;
  public filterStatus$: Observable<EApiStatus>;
  public readonly columns = [
    'checkbox',
    'index',
    'name',
    'credit',
    'type',
    'numberReality',
    'teacher',
  ];
  public classType = CoreConstant.CLASS_TYPE;
  public defaultSort = defaultSort;

  /** PRIVATE PROPERTIES */
  private _selectAll = false;

  /** GETTERS */
  public get selectAll(): boolean {
    return this._selectAll;
  }

  /** SETTERS */
  public set selectAll(checked: boolean) {
    this.checkboxes.controls.forEach((checkbox) => {
      checkbox.setValue(checked);
    });

    this.store.dispatch(
      teachingScheduleAssign_ChangeSelected({
        classIds: this.data.map((x) => x.id),
        checked,
      })
    );
  }

  public get checkboxes(): FormArray {
    return this.form.controls['checkbox'] as FormArray;
  }

  /** CONSTRUCTOR */
  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<TeachingScheduleAssignState>,
    private readonly destroy$: TuiDestroyService
  ) {
    this.filterStatus$ = store
      .select(teachingScheduleAssign_SelectFilterStatus)
      .pipe(takeUntil(this.destroy$));
  }

  /** LIFECYCLE */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.resetForm();
    }
  }

  /** PUBLIC METHODS */
  public onModelChange(index: number, checked: boolean): void {
    if (
      this._selectAll &&
      this.checkboxes.controls.some((checkbox) => !checkbox.value)
    ) {
      this._selectAll = false;
    } else if (
      !this._selectAll &&
      this.checkboxes.controls.every((checkbox) => checkbox.value)
    ) {
      this._selectAll = true;
    }

    this.store.dispatch(
      teachingScheduleAssign_ChangeSelected({
        classIds: [this.data[index].id],
        checked,
      })
    );
  }

  /** PRIVATE METHODS */
  private resetForm(): void {
    this.form = this.fb.group({
      checkbox: this.fb.array(this.data.map(() => false)),
    });
    this._selectAll = false;
  }
}
