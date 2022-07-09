import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { CalendarFilterModule } from '@teaching-scheduling-system/web/calendar/ui/calendar-filter';
import { CalendarMenuComponent } from './calendar-menu.component';

const NGRX = [ReactiveComponentModule];
const TAIGA_UI = [
  TuiActiveZoneModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiButtonModule,
  TuiSelectModule,
  TuiSidebarModule,
  TuiTextfieldControllerModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarFilterModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  declarations: [CalendarMenuComponent],
  exports: [CalendarMenuComponent],
})
export class CalendarMenuModule {}
