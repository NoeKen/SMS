import { EleveService } from 'src/app/services/eleve.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Eleve } from 'src/app/interfaces/eleve';
import { ClasssesService } from 'src/app/services/classses.service';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  classes : Class[];
  studentFormGroup : FormGroup
  student : Eleve ={
    Nom:'',
    Matricule:'',
    class_id : 0,
    // id_pension: 0,
  }
  constructor(
    private dialogref : MatDialog,
    private formBuilder : FormBuilder,
    private eleveService : EleveService,
    private classeServices : ClasssesService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.classeServices.getClasses()
    .subscribe((data: Class[])=>{
      this.classes=data;
      console.log('================ Classes : ', this.classes, '=======================');
    })

    this.studentFormGroup = this.formBuilder.group({
      Nom: ['', [Validators.required, Validators.maxLength(15)]],
      Matricule: ['', [Validators.required]],
      class_id: ['', [Validators.required]],
      // id_pension: ['', [Validators.required]],
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
  cancel(){
    console.log("new student : ", this.studentFormGroup.value);
    this.router.navigate(['students']);
    this. dialogref.closeAll();
  }


}
