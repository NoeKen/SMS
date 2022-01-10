import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
<<<<<<< HEAD
=======
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
>>>>>>> abf3b994d9f5a500ca140f246110e96095247002



@NgModule({
  declarations: [
    SigninComponent,
<<<<<<< HEAD
    ForgotpwdComponent
=======
    ForgotpwdComponent,
    ProfileComponent,
    RegisterComponent
>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
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
