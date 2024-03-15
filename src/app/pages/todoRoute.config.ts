import { Routes } from '@angular/router'

export const todoRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./todo-list/todo-list.component').then(m => m.TodoListComponent),
	},
]
