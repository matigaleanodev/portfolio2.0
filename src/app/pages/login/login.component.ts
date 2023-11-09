import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { LoginUser, User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@shared/services/app.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TitleCasePipe, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisibility: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  private service = inject(AuthService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  private app = inject(AppService);

  ngOnInit(): void {
    if (this.service.isLoggedIn) this.router.navigate(['/dashboard']);
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  onLogin(event: Event) {
    event.preventDefault();
    this.app._loading$.next(true);
    if (this.loginForm.valid) {
      const user = this.loginForm.getRawValue();
      this.service.login(user as LoginUser).subscribe({
        next: (user: User) => {
          this.toastr.success(
            `Bienvenido ${user.name}`,
            'Credenciales correctas'
          );
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.app._loading$.next(false);
        },
        complete: () => {
          this.app._loading$.next(false);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
      this.toastr.warning('Formulario no válido', 'Error');
    }
  }
}
