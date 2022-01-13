import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { AssignationComponent } from './assignation/assignation.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    NotesComponent,
    AssignationComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReportsComponent,
    AssignationComponent,
    NotesComponent
  ]
})
export class AcademicsModule { }
