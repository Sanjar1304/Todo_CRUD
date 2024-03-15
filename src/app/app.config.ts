import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideStore } from '@ngrx/store'

import { routes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { ENV, getEnv } from '../environments/env.provider'
import { provideEffects } from '@ngrx/effects'
import { effects, reducers } from './state'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { AuthInterceptor } from './core/interceptors/http.interceptor'

export const appConfig: ApplicationConfig = {
	providers: [
		CookieService,
		provideStore(reducers),
		provideEffects(...effects),
		provideRouter(routes),
		provideHttpClient(withInterceptors([AuthInterceptor])),
		provideAnimationsAsync(),
		{
			provide: ENV,
			useFactory: getEnv,
		},
	],
}
