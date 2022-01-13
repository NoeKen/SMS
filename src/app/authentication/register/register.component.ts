import { Component, OnInit,ViewChild,Injectable } from '@angular/core';
import { FormBuilder,NgForm, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FileUploader } from 'ng2-file-upload';
import { first } from 'rxjs/operators';
import { AdminsService } from 'src/app/admins.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imageURL: string ;
  registerForm:FormGroup;
  admins: Admin[] = [];
  admin: Admin=  {
    name: '',
    password: '',
    tel: 0,
    image: ''
  };
  error = '';
  success = '';

  

  constructor(private fb: FormBuilder, private adminService: AdminsService, private router: Router) {
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
    this.registerForm= this.fb.group({
      name : ['', [Validators.required, Validators.maxLength(30)]],
    tel :[],
    avatar: [null],
    password : ['',[ Validators.required, Validators.minLength(8)]]
  })

  }
showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.patchValue({
      avatar: file
    });
    this.registerForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
 
  /* public fileOver(e: any): void {
    this.hasDragOver = e;
  } */
  postdata(registerForm1:FormGroup)
  { 
    console.log(this.registerForm.value);
    this.resetAlerts();

    this.adminService.userregistration(this.admin).subscribe((res:Admin)=>{
    this.admins.push(res)
    this.success = 'Created successfully';

        // Reset the form
        registerForm1.reset();
      },
      (err) => (this.error = err.message));
     
  }
  get name() { return this.registerForm.get('name'); }
  get password() { return this.registerForm.get('password'); }
  get tel() { return this.registerForm.get('tel'); }
   get image() { return this.registerForm.get('avatar'); }
  submit() {
    this.router.navigate((['/', 'signin']));
    console.log(this.registerForm.value);
    this.registerForm.reset();
    this.registerForm.get('avatar').reset();
}
resetAlerts() {
  this.error = '';
  this.success = '';
}
}