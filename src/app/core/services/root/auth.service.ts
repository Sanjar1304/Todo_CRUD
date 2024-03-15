import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUserLoginResponse } from '../../interfaces/IUserLoginResponse'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly _http = inject(HttpClient)
	headers = new HttpHeaders({
		'content-type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	})

	public login(reqData: {
		email: string
		password: string
	}): Observable<IUserLoginResponse> {
		return this._http.post<IUserLoginResponse>(
			'/api/auth/token/login/',
			reqData,
			{ headers: this.headers }
		)
	}
}
