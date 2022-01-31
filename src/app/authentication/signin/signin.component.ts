import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Admin } from 'src/app/interfaces/admin';
import { AdminsService } from 'src/app/services/admins.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  admin: Admin[];
  currentUser: Admin;
  founded:boolean = false;

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
  onSubmit(){
    // console.log(this.loginForm.value);

    this.adminsService.getAmins()
    .subscribe((data: Admin[])=>{

      this.admin=data;
      console.log('================ users : ', this.admin, '=======================');

      for(var i=0; i<this.admin.length; i++) {
        if(this.loginForm.value.tel === this.admin[i].tel && this.loginForm.value.password === this.admin[i].password) {
             this.founded=true;
             this.currentUser=this.admin[i];
             console.log('====================================');
             console.log('CurrentUser : ', this.currentUser );
             console.log('====================================');
          }else{
            // this.founded=false;
            // alert ('Credentials not founded');

          }
      }
      this.founded===!null?this.router.navigate(['classes']):alert('Credentials not founded');
      // if ((this.admin[0].tel === this.loginForm.value.tel) && (this.admin[0].password === this.loginForm.value.password)) {
      //   alert('login succed');

      // }
      // else{
      //   alert('Tel or password is incorrect. please check it');
      // }
    })
  }
  get name() { return this.loginForm.get('tel'); }
  get password() { return this.loginForm.get('password'); }

}
