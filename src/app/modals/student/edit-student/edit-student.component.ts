import { EleveService } from 'src/app/services/eleve.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { Eleve } from 'src/app/interfaces/eleve';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  studentFormGroup : FormGroup
  eleve : Eleve ={
    id_pension: 0,
    class_id : 0,
    Nom : '',
    Matricule: '',

  }

  constructor(private paiementRef : MatDialog,
    private formBuilder : FormBuilder,
    private eleveService : EleveService,
    private router : Router,
    private routes : ActivatedRoute,) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log('routeParams: ',routeParams);

    this.studentFormGroup = this.formBuilder.group({
      class_id: [''],
      id_pension :  [''],
      Nom: ['', [Validators.required, Validators.maxLength(15)]],
      Matricule: ['', [Validators.required]],
      // avatar: [null],
      // password: ['', [Validators.required, Validators.minLength(8)]],
    })
    this.eleveService.getEleveById(routeParams['Matricule'])
    .subscribe((data:any) =>{
      console.log(data);
      this.studentFormGroup.patchValue(data[0]);
      console.log(this.studentFormGroup.value);
    });
  }

  update(){
    console.log("student updated : ", this.studentFormGroup.value);
    this.eleveService
    .updateEleve(this.studentFormGroup.value)
    .subscribe((data) => {
      this.router.navigate(['classes'])
    },
    error => {
      alert(error);
    })
  }
  cancel(){
    this.router.navigate(['students']);
  }
}
