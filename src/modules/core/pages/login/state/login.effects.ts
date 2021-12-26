import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PageAction from './login.page.actions';
import * as ApiAction from './login.api.actions';
import { AuthService } from '@services/core/auth.service';
import { TokenService } from '@services/core/token.service';
import { LocalStorageService } from '@services/core/storage/local-storage.service';
import { LocalDataService } from '@services/core/local-data.service';

@Injectable()
export class LoginEffects {
  /** EFFECTS */
  public login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageAction.clickLogin),
      mergeMap(({ loginForm }) => {
        return this.authService.auth(loginForm).pipe(
          map(({ token, teacher, commonInfo }) => {
            if (token === '' || !teacher) {
              return ApiAction.systemError();
            }

            this.tokenService.save(token);
            this.localDataService.setCommonInfo(commonInfo);

            return ApiAction.loginSuccessful({ teacher });
          }),
          catchError(() => of(ApiAction.wrongPassword()))
        );
      })
    );
  });

  public loginSuccessful$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ApiAction.loginSuccessful),
        mergeMap(() =>
          of({}).pipe(
            tap(() => {
              void this.router.navigate([''], {
                state: { skipAutoLogin: true },
              });
            })
          )
        )
      );
    },
    { dispatch: false }
  );

  /** CONSTRUCTOR */
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly localStorageService: LocalStorageService,
    private readonly localDataService: LocalDataService
  ) {}
}
