import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.maxLength(10)]),
    telephone: new FormControl('', [Validators.required])
  })
  

  constructor() { }

  ngOnInit(): void {
  }

}
