import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Enseignant } from 'src/app/interfaces/enseignant';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

  enseignant : Enseignant[];
  constructor(
    private personnelService : PersonnelService,
  ) { }
  ngOnInit(): void {
    this.personnelService.getPersonnels()
    .subscribe((data: Enseignant[])=>{
      this.enseignant=data;
      //console.log('================ Classes : ', this.classes, '=======================');
    })
  }


  displayStyle = "none";

  teacherForm = new FormGroup({
    name: new FormControl(""),
    tel: new FormControl("")
  });

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit() {
    console.log(this.teacherForm.value);
    this.displayStyle = "none";
    this.teacherForm.reset();
  }

  edit(ensignant:Enseignant){

  }

  delete(ensignant:Enseignant){

  }

}
