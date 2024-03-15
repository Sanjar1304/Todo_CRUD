import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { IErrorInterface } from '../../../core/interfaces/IError.interface'
import { Router } from '@angular/router'
import { UnsubscribeDirective } from '../../../core/directives/unsubscribe.directive'

export const errorConfigs: IErrorInterface[] = [
	{
		error: 404,
		image: 'assets/images/error/404.png',
		icon: 'assets/icons/error/cracked-glass.svg',
		title: 'Something went wrong...',
		message: 'The page you are trying to access was not found.',
	},
	{
		error: 500,
		image: 'assets/images/error/500.png',
		icon: 'assets/icons/error/plugged-out.svg',
		title: 'Internal Server Error.',
		message: 'We are already working on a fix. Please try again later.',
	},
	{
		error: 0,
		image: 'assets/images/error/0.png',
		icon: 'assets/icons/error/cracked-glass.svg',
		title: '',
		message: '',
	},
]

@Component({
	selector: 'app-error-page',
	templateUrl: './error-page.component.html',
	styleUrl: './error-page.component.scss',
	standalone: true,
	imports: [RouterModule, CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent extends UnsubscribeDirective implements OnInit {
	public errorPageConfig?: IErrorInterface

	private _router = inject(Router)

	public ngOnInit(): void {
		this.defineError()
	}

	public defineError(): void {
		this.errorPageConfig =
			errorConfigs.find((value: IErrorInterface) =>
				this._router.url.includes(value.error.toString())
			) ||
			errorConfigs.find((value: IErrorInterface): boolean => value.error === 0)
	}

	public navigateToLogin(): void {
		this._router.navigate(['/login'])
	}
}
