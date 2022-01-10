import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools/schools.component';
import { ClassesComponent } from './classes/classes.component';



@NgModule({
  declarations: [
    SchoolsComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SchoolsComponent,
    ClassesComponent
  ]
})
export class StructuresModule { }
