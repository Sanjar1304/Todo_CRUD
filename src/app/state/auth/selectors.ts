import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthStateInterface } from './reducers'

export const selectAuthState = createFeatureSelector<AuthStateInterface>('auth')
export const selectUserData = createSelector(
	selectAuthState,
	(state: AuthStateInterface) => state.userData
)
export const selectAuthenticating = createSelector(
	selectAuthState,
	state => state.authenticating
)
export const selectErrorMessage = createSelector(
	selectAuthState,
	state => state.errorMessage
)
