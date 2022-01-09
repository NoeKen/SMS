import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes/classes.component';
import { SchoolsComponent } from './schools/schools.component';



@NgModule({
  declarations: [
    ClassesComponent,
    SchoolsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AcademicsModule { }
