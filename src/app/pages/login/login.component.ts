import { Component, inject, OnInit } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common'
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
	FormsModule,
} from '@angular/forms'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'

import { AuthService } from '../../core/services/root/auth.service'
import { UnsubscribeDirective } from '../../core/directives/unsubscribe.directive'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		CommonModule,
		MatInputModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatButtonModule,
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent extends UnsubscribeDirective implements OnInit {
	public loginForm!: FormGroup

	private readonly _fb = inject(FormBuilder)
	private readonly _authService = inject(AuthService)
	public ngOnInit(): void {
		this.initLoginForm()
	}

	public initLoginForm(): void {
		this.loginForm = this._fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: [
				'',
				[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(30),
				],
			],
		})
	}

	public onSubmit() {
		const reqData = {
			email: this.loginForm.get('email')?.value,
			password: this.loginForm.get('password')?.value,
		}
		console.log(reqData)
		this._authService.login(reqData).subscribe(console.log)
	}
}
