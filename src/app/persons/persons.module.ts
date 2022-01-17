import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';



@NgModule({
  declarations: [
    PersonnelComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PersonnelComponent,
    StudentsComponent
  ]
})
export class PersonsModule { }
