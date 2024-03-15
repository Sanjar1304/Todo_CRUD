import { createAction, props } from '@ngrx/store'
import { IUserLoginResponse } from '../../core/interfaces/IUserLoginResponse'

export enum AuthActionTypes {
	Login = '[Auth] Login',
	LoginSuccess = '[Auth] Login Success',
	LoginFailure = '[Auth] Login Failure',
}

export const getLogin = createAction(
	AuthActionTypes.Login,
	props<{ email: string; password: string }>()
)
export const getLoginSuccess = createAction(
	AuthActionTypes.LoginSuccess,
	props<{ userData: IUserLoginResponse }>()
)
export const getLoginFailure = createAction(
	AuthActionTypes.LoginFailure,
	props<{ errorMessage: string }>()
)
