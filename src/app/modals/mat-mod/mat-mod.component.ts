import { MatServiceService } from './../../services/mat-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Matiere } from 'src/app/interfaces/matiere';

@Component({
  selector: 'app-mat-mod',
  templateUrl: './mat-mod.component.html',
  styleUrls: ['./mat-mod.component.scss']
})
export class MatModComponent implements OnInit {

  classFormGroup : FormGroup
    mat : Matiere ={
    intitule :'',
    coef : 0,
  }

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private matService : MatServiceService
  ) { }

  ngOnInit(): void {
    this.classFormGroup = this.formBuilder.group({
      intitule: ['', [Validators.required, Validators.maxLength(15)]],
      coef: ['', [Validators.required]]
      // avatar: [null],
      // password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit(){
    console.log("new class: ", this.classFormGroup.value);
    this.matService
      .addMat(this.classFormGroup.value)
      .subscribe((data) => {
        this.router.navigate(['assignation']);
        this.classFormGroup.reset();

      })

  }

}
