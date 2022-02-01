import { EleveService } from 'src/app/services/eleve.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Eleve } from 'src/app/interfaces/eleve';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  studentFormGroup : FormGroup
  student : Eleve ={
    nom:'',
    matricule:'',
    class_id : 0,
    id_pension: 0,
  }
  constructor(
    private paiementRef : MatDialog,
    private formBuilder : FormBuilder,
    private eleveService : EleveService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.studentFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.maxLength(15)]],
      matricule: ['', [Validators.required]],
      class_id: ['', [Validators.required]],
      pension_id: ['', [Validators.required]],

      // avatar: [null],
      // password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  /* openPension(){
    this.paiementRef.open(PensionComponent)
  } */

  onSubmit(){
    console.log("new student : ", this.studentFormGroup.value);
    this.eleveService
      .addEleve(this.studentFormGroup.value)
      .subscribe((data) => {
        this.router.navigate(['students']);
        this.studentFormGroup.reset();

      })

  }
}
