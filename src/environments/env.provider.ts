import { environment } from './environment.development'
import { InjectionToken } from '@angular/core'

export type Environment = typeof environment

export const ENV = new InjectionToken<Environment>('any')

export function getEnv(): Environment {
	return environment
}
