import { loginEffect } from './auth/effects'
import { authReducer } from './auth/reducers'

export const reducers = {
	auth: authReducer,
}

export const effects = [loginEffect]
