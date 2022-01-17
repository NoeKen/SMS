import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminsService } from 'src/app/admins.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  admin: Admin[];

  constructor(private fb: FormBuilder,private adminsService: AdminsService,private router:Router) {
    this.loginForm = this.fb.group({

      tel: ['', [Validators.required,Validators.minLength(1)]],
      password: ['', Validators.required]

    });
   }
  ngOnInit(): void {
    // this.adminsService.getAmins()
    // .subscribe((data: Admin[])=>{
    //   this.admin=data;
    //   console.log('================ users : ', this.admin, '=======================');
    // })
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

    this.adminsService.getAmins()
    .subscribe((data: Admin[])=>{
      this.admin=data;
      console.log('================ users : ', this.admin, '=======================');

      if ((this.admin[0].tel === this.loginForm.value.tel) && (this.admin[0].password === this.loginForm.value.password)) {
        alert('login succed');
        this.router.navigate(['classes']);
      }
      else{
        alert('Tel or password is incorrect. please check it');
      }
    })
  }
  get name() { return this.loginForm.get('tel'); }
  get password() { return this.loginForm.get('password'); }

}
