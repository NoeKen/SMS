import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Class } from 'src/app/interfaces/class';
import { AddClassComponent } from 'src/app/modals/add-class/add-class.component';
import { ClasssesService } from 'src/app/services/classses.service';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  // admin: Admin[];
  classes : Class[]

  constructor(
    // private adminService : AdminsService,
    private classeServices : ClasssesService,
    private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.classeServices.getClasses()
    .subscribe((data: Class[])=>{
      this.classes=data;
      console.log('================ Classes : ', this.classes, '=======================');
    })
  }

  openModal(){
    this.dialogRef.open(AddClassComponent)
  }

  delete(classes : Class) : void {

    // try{
    //   this.classeServices.deleteClass(id).subscribe(
    //     (res) => {
    //       this.classes= this.classes.filter(function(item){
    //         return item['classId'] && +item['classId'] !== +id;
    //       });
    //     })}catch(error){
    //   console.log(error);
    // }
    console.log(classes.classId);

    this.classeServices.deleteClass(classes.classId)
    .subscribe(data =>{
      this.classes = this.classes.filter(u => u !== classes);
    })
  }
}
