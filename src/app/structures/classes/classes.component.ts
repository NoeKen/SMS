import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/admins.service';
import { Admin } from 'src/app/admin';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  admin: Admin[];


  constructor(private adminService : AdminsService) { }

  ngOnInit(): void {
    this.adminService.getAmins()
    .subscribe((data: Admin[])=>{
      this.admin=data;
      console.log('================ users : ', this.admin, '=======================');
    })
  }

}
