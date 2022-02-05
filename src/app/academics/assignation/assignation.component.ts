import { MatModComponent } from './../../modals/mat-mod/mat-mod.component';
import { MatServiceService } from 'src/app/services/mat-service.service';
import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/interfaces/matiere';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assignation',
  templateUrl: './assignation.component.html',
  styleUrls: ['./assignation.component.scss']
})
export class AssignationComponent implements OnInit {

  matiere : Matiere[];

  constructor(
    // private adminService : AdminsService,
    private matService : MatServiceService,
    private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.matService.getMat()
    .subscribe((data: Matiere[])=>{
      this.matiere=data;
      //console.log('================ Classes : ', this.classes, '=======================');
    })
  }
 
  openModal(){
    this.dialogRef.open(MatModComponent)
  }

  delete(matt : Matiere) : void {
    console.log(matt.intitule);

    this.matService.deleteMat(matt.intitule)
    .subscribe(data =>{
      this.matiere = this.matiere.filter(u => u !== matt);
    })
  }

}
