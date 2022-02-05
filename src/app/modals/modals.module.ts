import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddPensionComponent } from './add-pension/add-pension.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { AddClassComponent } from './classe/add-class/add-class.component';
import { EditClassComponent } from './classe/edit-class/edit-class.component';
import { PensionComponent } from './pension/pension.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { MatModComponent } from './mat-mod/mat-mod.component';
// import { MaterialcmpModule } from '../materialcmp/materialcmp.module';



@NgModule({
  declarations: [
    AddClassComponent,
    AddStudentComponent,
    AddSchoolComponent,
    AddNoteComponent,
    PensionComponent,
    AddPensionComponent,
    EditClassComponent,
    EditStudentComponent,
    MatModComponent,
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
