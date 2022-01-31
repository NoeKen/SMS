import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools/schools.component';
import { ClassesComponent } from './classes/classes.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SchoolsComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    SchoolsComponent,
    ClassesComponent
  ]
})
export class StructuresModule { }
