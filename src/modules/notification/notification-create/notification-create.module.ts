import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiButtonModule, TuiDataListModule, TuiLabelModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputDateRangeModule, TuiInputModule, TuiSelectModule, TuiTabsModule } from '@taiga-ui/kit';
import { defaultEditorExtensions, TuiEditorModule, TUI_EDITOR_EXTENSIONS } from '@taiga-ui/addon-editor';

import { NotificationCreateRoutingModule } from './notification-create.routes';
import { NotificationCreateCommonFormComponent } from './common/notification-create-common-form/notification-create-common-form.component';
import { NotificationCreateManagingClassComponent } from './components/notification-create-managing-class/notification-create-managing-class.component';
import { NotificationCreateModuleClassComponent } from './components/notification-create-module-class/notification-create-module-class.component';
import { NotificationCreateShellComponent } from './shell/notification-create-shell.component';
import { NotificationCreateAsideComponent } from './common/notification-create-aside/notification-create-aside.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromNotificationCreate from './state';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    NotificationCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    TuiTabsModule,
    TuiInputModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiInputDateRangeModule,
    TuiEditorModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorModule,
    TuiLabelModule,
    TuiButtonModule,
    StoreModule.forFeature(
      fromNotificationCreate.notificationCreateFeatureKey,
      fromNotificationCreate.notificationCreateReducer
    ),
    EffectsModule.forFeature([fromNotificationCreate.NotificationCreateEffects])
  ],
  declarations: [
    NotificationCreateManagingClassComponent,
    NotificationCreateModuleClassComponent,
    NotificationCreateCommonFormComponent,
    NotificationCreateShellComponent,
    NotificationCreateAsideComponent,
  ],
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions
    },
  ]
})
export class NotificationCreateModule { }