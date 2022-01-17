import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminsService } from 'src/app/admins.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  imageURL: string
  registerForm: FormGroup
  admins: Admin[] = []
  admin: Admin = {
    name: '',
    password: '',
    tel: 0,
    email: '',
    // image: ''
  }
  error = ''
  success = ''

  constructor(
    private fb: FormBuilder,
    private adminService: AdminsService,
    private router: Router,
  ) { }

  ngOnInit(): void {this.registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    tel: ['', [Validators.required, Validators.minLength(8)]],
    email: [
      '',
      [Validators.required, Validators.minLength(1), Validators.email],
    ],
    // avatar: [null],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })
}
// showPreview(event) {
//   const file = (event.target as HTMLInputElement).files[0]
//   this.registerForm.patchValue({
//     avatar: file,
//   })
//   this.registerForm.get('avatar').updateValueAndValidity()

//   // File Preview
//   const reader = new FileReader()
//   reader.onload = () => {
//     this.imageURL = reader.result as string
//   }
//   reader.readAsDataURL(file)
// }

  get name() {
    return this.registerForm.get('name');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get tel() {
    return this.registerForm.get('tel');
  }
  get email() {
    return this.registerForm.get('email');
  }
  //  get image() { return this.registerForm.get('avatar'); }

  onSubmit() {
    // this.router.navigate((['/', 'signin']));
    console.log(this.registerForm.value)
    this.adminService
      .userRegistration(this.registerForm.value)
      .subscribe((data) => {
        this.router.navigate(['signin']);
        this.registerForm.reset();
      })
    // this.registerForm.reset();
    // this.registerForm.get('avatar').reset();
  }
  resetAlerts() {
    this.error = ''
    this.success = ''
  }

}
