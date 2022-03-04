import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import {
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TUI_SANITIZER } from '@taiga-ui/cdk';
import { TUI_LANGUAGE, TUI_VIETNAMESE_LANGUAGE } from '@taiga-ui/i18n';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import { environment } from '@environments/environment';
import { AppSettingsService } from '@services/core/app-settings.service';
import {
  loadAppSettings,
  maxLengthFactory,
  requiredFactory,
  notContainValueFactory,
  beforeTodayFactory,
} from '@shared/factories';
import { InterceptorsModule } from 'src/shared/interceptors/interceptors.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { DatePipe } from '@angular/common';
import { TokenService } from '@services/core/token.service';
import { ConfirmModule } from '@services/dialog/confirm/confirm.module';
import { ShortenNamePipe } from '@pipes/shorten-name.pipe';

registerLocaleData(localeVi, 'vi');

const TAIGA_UI = [TuiRootModule, TuiDialogModule, TuiNotificationsModule];
const NGRX = [
  StoreModule.forRoot({ router: routerReducer }, {}),
  StoreDevtoolsModule.instrument({
    maxAge: 50,
    logOnly: environment.production,
  }),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot(),
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InterceptorsModule,
    AppRoutingModule,
    ConfirmModule,
    ...NGRX,
    ...TAIGA_UI,
  ],
  providers: [
    {
      provide: TokenService.DATE_PIPE_TOKEN,
      useClass: DatePipe,
    },
    {
      provide: TokenService.SHORTEN_NAME_PIPE_TOKEN,
      useClass: ShortenNamePipe,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppSettings,
      multi: true,
      deps: [AppSettingsService],
    },
    {
      provide: LOCALE_ID,
      useValue: 'vi',
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_VIETNAMESE_LANGUAGE),
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        maxlength: maxLengthFactory,
        required: requiredFactory,
        notContainValue: notContainValueFactory,
        beforeToday: beforeTodayFactory,
      },
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
