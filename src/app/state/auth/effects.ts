import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../../core/services/root/auth.service'
import * as Action from './actions'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { IUserLoginResponse } from '../../core/interfaces/IUserLoginResponse'
import { getLoginSuccess } from './actions'

@Injectable()
export class loginEffect {
	private _actions$ = inject(Actions)
	private _authService = inject(AuthService)
	private _cookieService = inject(CookieService)

	login$ = createEffect(() =>
		this._actions$.pipe(
			ofType(Action.getLogin),
			switchMap((req: { email: string; password: string }) =>
				this._authService.login(req).pipe(
					map((userData: IUserLoginResponse) => {
						this._cookieService.set('authToken', userData.token)
						return getLoginSuccess({ userData })
					}),
					catchError(error =>
						of(Action.getLoginFailure({ errorMessage: error.message }))
					)
				)
			)
		)
	)
}
