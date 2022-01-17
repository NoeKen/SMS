import { Component, OnInit, ViewChild, Injectable } from '@angular/core'
import {
  FormBuilder,
  NgForm,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { FileUploader } from 'ng2-file-upload'
import { first } from 'rxjs/operators'
import { AdminsService } from '../../admins.service'
import { Router } from '@angular/router'
import { Admin } from '../../admin'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
  ) {
    /* this.uploader = new FileUploader({
      url: 'http://localhost:9090/upload',
      disableMultipart: false,
      autoUpload: true
    });

    this.uploader.response.subscribe(res => {
      // Upload returns a JSON with the image ID
      this.url = 'http://localhost:9090/get/' + JSON.parse(res).id;
      this.urlChange.emit(this.url);
    }); */
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
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
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.registerForm.patchValue({
      avatar: file,
    })
    this.registerForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader()
    reader.onload = () => {
      this.imageURL = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  /* public fileOver(e: any): void {
    this.hasDragOver = e;
  } */
  // postdata(registerForm1)
  // {
  //   console.log(this.registerForm.value);
  //   this.resetAlerts();

  //   this.adminService.userregistration(registerForm1.value.name,registerForm1.value.tel,registerForm1.value.password)
  //   .pipe(first())
  //   .subscribe(
  //     data => {this.router.navigate(['signin']);},
  //     error => {})

  // }

  // onSubmit(registerForm1)
  // {
  // this.adminService.userregistration(registerForm1.value.name, registerForm1.value.tel, registerForm1.value.password)
  // .pipe(first())
  // .subscribe(data => {
  // this.router.navigate(['/signin']);
  // console.log('Succed');

  // },

  // error => {
  // });
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
