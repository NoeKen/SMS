import { Eleve } from './../../interfaces/eleve';
import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EleveService } from 'src/app/services/eleve.service';
import { AddStudentComponent } from 'src/app/modals/add-student/add-student.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  //Form Validables
  eleve : Eleve[];
  matricule: string;

  constructor(
    // private adminService : AdminsService,
    private eleveServices : EleveService,
    private router : Router,
    private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.eleveServices.getEleves()
    .subscribe((data: Eleve[])=>{
      this.eleve=data;
      console.log('================ Eleves : ', this.eleve, '=======================');
    })
  }

  openModal(){
    this.dialogRef.open(AddStudentComponent)
  }

  delete(eleve : Eleve) : void {

    // try{
    //   this.classeServices.deleteClass(id).subscribe(
    //     (res) => {
    //       this.classes= this.classes.filter(function(item){
    //         return item['classId'] && +item['classId'] !== +id;
    //       });
    //     })}catch(error){
    //   console.log(error);
    // }
    console.log( "Matricule deleted",eleve.Matricule);

    this.eleveServices.deleteEleve(eleve.Matricule)
    .subscribe(data =>{
      this.eleve = this.eleve.filter(u => u !== eleve);
    })
  }

  edit(eleve : Eleve) : void {

    console.log(eleve.Matricule);
    this.matricule = eleve.Matricule;
    this.router.navigate(['editStudent/' + this.matricule]);
    }

}
