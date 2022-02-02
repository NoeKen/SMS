import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/interfaces/class';
import { ClasssesService } from 'src/app/services/classses.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

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
    private routes : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log('routeParams: ',routeParams['id']);


    this.classFormGroup = this.formBuilder.group({
      class_id: [''],
      id_pension : [''],
      nom: ['', [Validators.required, Validators.maxLength(15)]],
      niveau: ['', [Validators.required]],
      examen: ['', [Validators.required]],
      // avatar: [null],
      // password: ['', [Validators.required, Validators.minLength(8)]],
    })
    this.classeService.getClasseById(routeParams['id'])
    .subscribe((data:any) =>{
      console.log(data)
      this.classFormGroup.patchValue(data);
    });

  }

  update(){
    console.log("class updated : ", this.classFormGroup.value);
    this.classeService.updateClass(this.classFormGroup.value).subscribe((data) => {
      this.router.navigate(['classes'])
    },
    error => {
      alert(error);
    })
  }

  cancel(){
    this.router.navigate(['classes']);
  }

}
