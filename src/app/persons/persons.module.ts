import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { StudentsComponent } from './students/students.component';
import { MaterialcmpModule } from '../materialcmp/materialcmp.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    PersonnelComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    MaterialcmpModule,
    MatTableModule
  ],
  exports: [
    PersonnelComponent,
    StudentsComponent
  ]
})
export class PersonsModule { }
