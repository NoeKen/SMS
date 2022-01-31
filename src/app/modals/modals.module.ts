import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddClassComponent } from './add-class/add-class.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddPensionComponent } from './add-pension/add-pension.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PensionComponent } from './pension/pension.component';
// import { MaterialcmpModule } from '../materialcmp/materialcmp.module';



@NgModule({
  declarations: [
    AddClassComponent,
    AddStudentComponent,
    AddSchoolComponent,
    AddNoteComponent,
    PensionComponent,
    AddPensionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    // MatIcon,
    // MaterialcmpModule,
  ],
})
export class ModalsModule { }
