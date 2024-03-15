import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class ErrorService {
	public constructor(private _router: Router) {}

	public handleHttpError(error: HttpErrorResponse): void {
		if (error.status === 401) throw error

		if (error.status === 0 && error.error instanceof ProgressEvent) {
			void this._router.navigate(['login'])
		} else {
			const message = error?.error.detail || error?.error.message || error.message

      // eslint-disable-next-line
			console.log(message)
		}
	}

	public handleLocalError(error: unknown): void {
    // eslint-disable-next-line
		console.log(error)
	}
}
