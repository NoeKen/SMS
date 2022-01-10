import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    SigninComponent,
    ForgotpwdComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SigninComponent,
    ForgotpwdComponent
  ]
})
export class AuthenticationModule { }
