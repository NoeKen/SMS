import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Class } from 'src/app/interfaces/class';
import { ClasssesService } from 'src/app/services/classses.service';
import { PensionComponent } from '../../pension/pension.component';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  classFormGroup : FormGroup
  classe : Class ={
    class_id : 0,
    nom : '',
    niveau :'',
    examen : 0,
  }
  constructor(
    private paiementRef : MatDialog,
    private formBuilder : FormBuilder,
    private classeService : ClasssesService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.classFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.maxLength(15)]],
      niveau: ['', [Validators.required]],
      examen: ['', [Validators.required]],
      // avatar: [null],
      // password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  openPension(){
    this.paiementRef.open(PensionComponent)
  }

  onSubmit(){
    console.log("new class : ", this.classFormGroup.value);
    this.classeService
      .addClass(this.classFormGroup.value)
      .subscribe((data) => {
        this.router.navigate(['classes']);
        this.classFormGroup.reset();

      })

  }
}
