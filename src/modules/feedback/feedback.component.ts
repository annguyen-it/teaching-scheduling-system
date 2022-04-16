import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  EditorConstant,
  FeedbackConstant,
  FeedbackItem,
} from '@shared/constants';

import { BaseComponent } from '@modules/core/base/base.component';
import { Store } from '@ngrx/store';
import { TuiDialogService } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { EApiStatus } from '@shared/enums';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import * as fromFeedback from './state';
import { SuccessDialogComponent } from './_shared/success-dialog/success-dialog.component';
import { SuccessDialogHeaderComponent } from './_shared/success-dialog-header/success-dialog-header.component';
import { SendFeedback } from 'src/shared/models';

@Component({
  selector: 'tss-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent extends BaseComponent {
  /** PUBLIC PROPERTIES */
  public form!: FormGroup;
  public status$: Observable<EApiStatus>;
  public readonly EApiStatus = EApiStatus;
  public readonly topics = FeedbackConstant.items;
  public readonly tools = EditorConstant.tools;

  /** CONSTRUCTOR */
  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<fromFeedback.FeedbackState>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {
    super();

    this.status$ = store
      .select(fromFeedback.selectStatus)
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$));

    this.store.dispatch(fromFeedback.reset());

    this.handleSubmit();
    this.initForm();
  }

  /** PUBLIC METHODS */
  public onSubmit(): void {
    if (this.form.valid) {
      const title = this.form.get('title')?.value as string;
      const form: SendFeedback = {
        data: {
          content: this.form.get('content')?.value as string,
          title: title ? title : '(Không có tiêu đề)',
        },
        is_bug: this.form.get('reportBug')?.value as number,
        type: (this.form.get('tags')?.value as FeedbackItem[])
          .map((x) => x.key)
          .join(','),
      };
      this.store.dispatch(fromFeedback.submit({ form }));
    }
  }

  /** PRIVATE METHODS */
  private initForm(): void {
    this.form = this.fb.group({
      title: [''],
      reportBug: [0],
      tags: [[]],
      content: ['', [Validators.required, Validators.maxLength(5000)]],
    });
  }

  private handleSubmit(): void {
    this.status$
      .pipe(
        tap((status) => {
          if (status === EApiStatus.successful) {
            this.openSuccessDialog();
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private openSuccessDialog(): void {
    this.dialogService
      .open(new PolymorpheusComponent(SuccessDialogComponent, this.injector), {
        dismissible: false,
        header: new PolymorpheusComponent(
          SuccessDialogHeaderComponent,
          this.injector
        ),
      })
      .subscribe();
  }
}
