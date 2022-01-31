import { Injectable } from '@angular/core';
import * as PageAction from './app-shell.page.actions';
import * as ApiAction from './app-shell.api.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { TokenService } from '@services/core/token.service';
import { UserService } from '@services/user.service';
import { AppService } from '@services/core/app.service';

@Injectable()
export class AppShellEffects {
  /** EFFECTS */
  public autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageAction.tryAutoLogin),
      mergeMap(() => {
        return this.userService.me().pipe(
          map((teacher) =>
            teacher
              ? ApiAction.autoLoginSuccessfully({ teacher })
              : ApiAction.autoLoginFailure()
          ),
          catchError(() => of(ApiAction.autoLoginFailure()))
        );
      })
    );
  });

  public autoLoginFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ApiAction.autoLoginFailure),
        mergeMap(() =>
          of({}).pipe(
            tap(() => {
              this.tokenService.clear();
              this.appService.redirectToLogin();
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
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}
}
