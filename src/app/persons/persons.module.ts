import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    PersonnelComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonsModule { }
