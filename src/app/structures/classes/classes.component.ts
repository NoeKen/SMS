import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassComponent } from 'src/app/modals/add-class/add-class.component';
import { Admin } from 'src/app/interfaces/admin';
import { AdminsService } from 'src/app/services/admins.service';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  admin: Admin[];


  constructor(
    private adminService : AdminsService,
    private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.adminService.getUsers()
    .subscribe((data: Admin[])=>{
      this.admin=data;
      console.log('================ users : ', this.admin, '=======================');
    })
  }

  openModal(){
    this.dialogRef.open(AddClassComponent)
  }
}
