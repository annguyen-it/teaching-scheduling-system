import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
} from '@angular/core';
import { BaseComponent } from '@modules/core/base/base.component';
import { ExamStore } from '@modules/exam/state';
import { EApiStatus } from '@shared/enums';
import { ExamScheduleModel } from '@shared/models';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { tap } from 'rxjs/operators';
import { AssignExamDialogComponent } from '../assign-exam-dialog/assign-exam-dialog.component';

@Component({
  selector: 'tss-exam-list-table',
  templateUrl: './exam-list-table.component.html',
  styleUrls: ['./exam-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamListTableComponent extends BaseComponent {
  /** PUBLIC PROPERTIES */
  public readonly EApiStatus = EApiStatus;
  public readonly columns = [
    'index',
    'name',
    'method',
    'credit',
    'room',
    'numberOfStudents',
    'teacher',
    'action',
  ];
  public readonly data$ = this.store.data$;
  public readonly status$ = this.store.status$;

  /** CONSTRUCTOR */
  constructor(
    private readonly store: ExamStore,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(TuiDialogService)
    private readonly dialogService: TuiDialogService
  ) {
    super();
  }

  /** PUBLIC METHOD */
  public onOpenAssignDialog(exam: ExamScheduleModel): void {
    this.dialogService
      .open<string[]>(
        new PolymorpheusComponent(AssignExamDialogComponent, this.injector),
        {
          label: 'Phân lịch thi',
          data: exam,
        }
      )
      .pipe(tap((teachers) => this.store.updateExam(exam.id, teachers)))
      .subscribe();
  }
}
