import { Eleve } from './../../interfaces/eleve';
import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EleveService } from 'src/app/services/eleve.service';
import { AddStudentComponent } from 'src/app/modals/student/add-student/add-student.component';
import { Class } from 'src/app/interfaces/class';
import { ClasssesService } from 'src/app/services/classses.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  //Form Validables
  eleve : Eleve[];
  eleves : Eleve;
  classes : Class[]
  matricule: string;

  constructor(
    // private adminService : AdminsService,
    private eleveServices : EleveService,
    private classesService : ClasssesService,
    private router : Router,
    private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.eleveServices.getEleves()
    .subscribe((data: Eleve[])=>{
      this.eleve=data;
      console.log('================ Eleves : ', this.eleve, '=======================');
    });

    this.classesService.getClasses()
    .subscribe((data: Class[])=>{
      this.classes=data;
      console.log('================ Eleves : ', this.eleve, '=======================');
    })
    this.getStudentByClass(this.eleves);
  }

  openModal(){
    this.dialogRef.open(AddStudentComponent)
  }

  getStudentByClass(eleve:Eleve){
    this.eleveServices.getEleveByClass(eleve.Matricule,eleve.class_id)
    .subscribe((data: Eleve[])=>{
      this.eleve=data;
      console.log('================ Eleves par classe : ', this.eleve, '=======================');
    })
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

    // edit(classes : Class) : void {

    //   console.log(classes.class_id);
    //   this._id = classes.class_id;
    //   this.router.navigate(['editClass/' + this._id]);
    //   }

}
