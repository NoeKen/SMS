import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';



@NgModule({
  declarations: [
    SigninComponent,
    ForgotpwdComponent
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
