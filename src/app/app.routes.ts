import { Routes } from '@angular/router'
import { todoRoutes } from './pages/todoRoute.config'
import { errorRoutes } from './shared/errorRoutes'

export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () =>
			import('./pages/login/login.component').then(m => m.LoginComponent),
	},
	{
		path: '',
		children: todoRoutes,
	},
	{
		path: 'error',
		children: errorRoutes,
	},
]
