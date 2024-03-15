import { HttpInterceptorFn } from '@angular/common/http'
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
	const headersConfig = {
		Authorization: 'Token 7f01f83121a1340519aeda7810118fbfa86faf7c',
	}
	const authReq = req.clone({
		setHeaders: headersConfig,
	})

	console.log(authReq)
	return next(authReq)
}
