import { Directive, HostListener, Inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { TuiDestroyService, TuiMonth } from '@taiga-ui/cdk';
import { TuiAlertService } from '@taiga-ui/core';
import { ScheduleHelper } from '@teaching-scheduling-system/core/utils/helpers';
import {
  calendarChangeMonth,
  calendarNext,
  calendarPrev,
  calendarSelectFilter,
  calendarSelectView,
  CalendarState,
} from '@teaching-scheduling-system/web/calendar/data-access';
import {
  AppShellState,
  selectNameTitle,
} from '@teaching-scheduling-system/web/shared/data-access/store';
import { Subject, takeUntil, tap, withLatestFrom } from 'rxjs';

@Directive({
  selector: '[tssNavigate]',
  providers: [TuiDestroyService],
})
export class NavigateDirective {
  /** INPUT */
  @Input('tssNavigate') public type!: 'prev' | 'next' | 'today';
  @Input() public scheduleComponent!: ScheduleComponent;

  /** PRIVATE PROPERTIES */
  private readonly today$ = new Subject<void>();
  private readonly displayNotification$ = new Subject<void>();
  private canDisplayNotification = true;

  /** CONSTRUCTOR */
  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
    private readonly store: Store<CalendarState>,
    private readonly appShellStore: Store<AppShellState>,
    private readonly destroy$: TuiDestroyService
  ) {
    this.handleToday();
    this.handleDisplayNotification();
  }

  /** HOST LISTENER */
  @HostListener('click') public onClick(): void {
    switch (this.type) {
      case 'prev':
        this.onPrev();
        break;
      case 'next':
        this.onNext();
        break;
      default:
        this.onToday();
        break;
    }
  }

  /** PRIVATE METHODS */
  private onPrev(): void {
    this.store.dispatch(
      calendarPrev({
        oldSelectedDate: this.scheduleComponent.selectedDate,
      })
    );
  }

  private onNext(): void {
    this.store.dispatch(
      calendarNext({
        oldSelectedDate: this.scheduleComponent.selectedDate,
      })
    );
  }

  private onToday(): void {
    this.today$.next();
  }

  private handleToday(): void {
    this.today$
      .pipe(
        withLatestFrom(
          this.store.select(calendarSelectView),
          this.store.select(calendarSelectFilter)
        ),
        tap(({ 1: view, 2: filter }) => {
          const today = new Date();

          if (
            !ScheduleHelper.dayInCurrentView(
              this.scheduleComponent,
              view,
              today
            )
          ) {
            this.scheduleComponent.selectedDate = today;
            this.store.dispatch(
              calendarChangeMonth({
                month: new TuiMonth(today.getFullYear(), today.getMonth()),
              })
            );
          }

          if (this.canDisplayNotification && !filter.showDepartmentSchedule) {
            this.displayNotification$.next();
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private handleDisplayNotification(): void {
    this.displayNotification$
      .pipe(
        withLatestFrom(this.appShellStore.select(selectNameTitle)),
        tap(({ 1: nameTitle }) => {
          this.canDisplayNotification = false;
          const schedule = this.scheduleComponent;
          const now = new Date();
          const year = now.getFullYear();
          const month = now.getMonth();
          const date = now.getDate();
          const eventsCount = schedule.getEvents(
            new Date(year, month, date),
            new Date(year, month, date, 23, 59, 59, 999)
          ).length;
          const content =
            eventsCount === 0
              ? `${nameTitle} h??y t???n h?????ng th???i gian ngh??? ng??i!`
              : `Ch??c ${nameTitle.toLowerCase()} c?? ng??y l??m vi???c hi???u qu???!`;
          const label =
            eventsCount === 0
              ? `${nameTitle} kh??ng c?? s??? ki???n n??o trong h??m nay`
              : `${nameTitle} c?? ${eventsCount} s??? ki???n v??o h??m nay`;

          this.alertService
            .open(content, { label, autoClose: 6000 })
            .subscribe({
              complete: () => (this.canDisplayNotification = true),
            });
        })
      )
      .subscribe();
  }
}
