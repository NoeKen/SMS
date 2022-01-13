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

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private adminsService: AdminsService,private router:Router) {
    this.angForm = this.fb.group({
 
      name: ['', [Validators.required,Validators.minLength(1)]],
      password: ['', Validators.required]
 
    });
   }
  ngOnInit(): void {
  }
  postdata(angForm1:FormGroup)
  {
    this.adminsService.userlogin(angForm1.value.name,angForm1.value.password)
      .pipe(first())
      .subscribe(
          data => {
                const redirect = this.adminsService.redirectUrl ? this.adminsService.redirectUrl : '/main';
                this.router.navigate([redirect]);
 
          },
          error => {
              alert("User name or password is incorrect")
          });
  }
  get name() { return this.angForm.get('name'); }
  get password() { return this.angForm.get('password'); }

}
