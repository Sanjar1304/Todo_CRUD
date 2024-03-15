import { Routes } from '@angular/router'

export const errorRoutes: Routes = [
	{
		path: '404',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/error-page/error-page.component').then(
				m => m.ErrorPageComponent
			),
	},
	{
		path: '500',
		pathMatch: 'full',
		loadChildren: () =>
			import('./pages/error-page/error-page.component').then(
				m => m.ErrorPageComponent
			),
	},
]
