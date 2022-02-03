import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Class } from 'src/app/interfaces/class';
import { AddClassComponent } from 'src/app/modals/classe/add-class/add-class.component';
import { EditClassComponent } from 'src/app/modals/classe/edit-class/edit-class.component';
import { ClasssesService } from 'src/app/services/classses.service';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  // admin: Admin[];
  classes : Class[];
  class_id: number;

  constructor(
    // private adminService : AdminsService,
    private classeServices : ClasssesService,
    private dialogRef : MatDialog,
    private router : Router,
    ) { }

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

    console.log(classes.class_id);

    this.classeServices.deleteClass(classes.class_id)
    .subscribe(data =>{
      this.classes = this.classes.filter(u => u !== classes);
    })
  }

  edit(classes : Class) : void {

    console.log(classes.class_id);
    this.class_id = classes.class_id;
    this.router.navigate(['editClass/' + this.class_id]);
    }
}
