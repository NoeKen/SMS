import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
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

}
