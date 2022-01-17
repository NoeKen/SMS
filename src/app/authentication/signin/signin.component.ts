import { Component, OnInit } from '@angular/core';
import { FormBuilder,NgForm, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FileUploader } from 'ng2-file-upload';
import { first } from 'rxjs/operators';
import { AdminsService } from 'src/app/admins.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private adminsService: AdminsService,private router:Router) {
    this.loginForm = this.fb.group({

      tel: ['', [Validators.required,Validators.minLength(1)]],
      password: ['', Validators.required]

    });
   }
  ngOnInit(): void {
    this.loginForm.reset();
  }
  // postdata(loginForm1:FormGroup)
  // {
  //   this.adminsService.userlogin(loginForm1.value.name,loginForm1.value.password)
  //     .subscribe(
  //         data => {
  //               // const redirect = this.adminsService.redirectUrl ? this.adminsService.redirectUrl : '/class';
  //               this.router.navigate(['class']);

  //         },
  //         error => {
  //             alert("User name or password is incorrect")
  //         });
  // }
  onSubmit(){
    console.log(this.loginForm.value);

    this.adminsService.userlogin(this.loginForm.value.tel, this.loginForm.value.password)
    .subscribe(
      data =>{
        this.router.navigate(['class']);
      }
    )
  }
  get name() { return this.loginForm.get('tel'); }
  get password() { return this.loginForm.get('password'); }

}
