import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarConstants } from '@shared/constants';
import { TokenService } from '@services/core/token.service';
import { Store } from '@ngrx/store';
import * as fromAppShell from '@modules/core/components/app-shell/state';
import { Observable } from 'rxjs';
import { Nullable, Teacher } from 'src/shared/models';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@modules/core/base/base.component';
import { AuthService } from '@services/core/auth.service';

@Component({
  selector: 'tss-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent extends BaseComponent {
  /** PUBLIC PROPERTIES */
  public readonly items = NavbarConstants.items;
  public user$: Observable<Nullable<Teacher>>;
  public openDropDown = false;

  /** CONSTRUCTOR */
  constructor(
    appShellStore: Store<fromAppShell.AppShellState>,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService
  ) {
    super();

    this.user$ = appShellStore
      .select(fromAppShell.selectTeacher)
      .pipe(takeUntil(this.destroy$));
  }

  /** PUBLIC METHODS */
  public onClickDropDownItem(action: string): void {
    this.openDropDown = false;
    if (action === NavbarConstants.keys.LOG_OUT) {
      this.authService.logOut().subscribe();
      this.tokenService.clear();
      void this.router.navigate(['/login']);
    }
  }
}
