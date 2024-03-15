import { IUserLoginResponse } from '../../core/interfaces/IUserLoginResponse'
import { createReducer, on } from '@ngrx/store'
import * as Action from './actions'

export interface AuthStateInterface {
	userData: IUserLoginResponse | null
	authenticating: boolean
	errorMessage: string | null
}

export const initialState: AuthStateInterface = {
	userData: null,
	authenticating: false,
	errorMessage: null,
}

export function authReducerFunc(
	state = initialState,
	action: any
): AuthStateInterface {
	switch (action.type) {
		case Action.getLogin:
			return {
				...state,
				authenticating: true,
				errorMessage: null,
			}
		case Action.getLoginSuccess:
			return {
				...state,
				authenticating: false,
				errorMessage: null,
			}

		case Action.getLoginFailure:
			return {
				...state,
				userData: null,
				authenticating: false,
				errorMessage: 'Invalid credentials',
			}
		default:
			return state
	}
}

export const authReducer = createReducer(authReducerFunc)
