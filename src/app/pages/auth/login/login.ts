import { Component, inject } from '@angular/core';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { RippleModule } from 'primeng/ripple';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { Auth } from '../../../models/auth';
import { CommonModule } from '@angular/common';
import { LoginSchema } from '../../../schema/login-schema';
import { ZodError } from 'zod';
import { NgxMaskDirective } from 'ngx-mask';
import { AuthService } from '../../../auth/auth.service';
import { MessageService } from 'primeng/api';
import { LayoutCampo } from "../../../components/layout-campo/layout-campo";


@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
    AppFloatingConfigurator,
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    NgxMaskDirective,
    LayoutCampo
],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public objeto = new Auth();
  checked: boolean = false;
  loading: boolean = false;
  private router = inject(Router);
  public errorValidacao: Record<string, string> = {};
  constructor(private auth: AuthService) {}
  private messageService = inject(MessageService);

  login() {
    if (!this.validarItens()) return;
    this.loading = true;

    this.auth.login(this.objeto).subscribe({
      next: (res: any) => {
        this.loading = false;

        this.gerenciarRotaUsuario(res);
      },
      error: (err) => {
         this.messageService.add({
           severity: 'error',
           summary: err.error.message,
         });
        this.loading = false;
    
      },
    });
  }

  gerenciarRotaUsuario(res: any) {
    this.router.navigate(['client/home']);
  }

  validarItens(): any {
    try {
      LoginSchema.parse([this.objeto]);
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        this.errorValidacao = {};
        error.issues.forEach((e) => {
          const value = e.path[1];
          this.errorValidacao[String(value)] = e.message;
        });

        return false;
      }
    }
  }
}
