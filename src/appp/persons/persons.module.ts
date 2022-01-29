import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { StudentsComponent } from './students/students.component';
<<<<<<< HEAD:src/appp/persons/persons.module.ts
import { MaterialcmpModule } from '../materialcmp/materialcmp.module';
import { MatTableModule } from '@angular/material/table';
=======
import { FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/persons/persons.module.ts



@NgModule({
  declarations: [
    PersonnelComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD:src/appp/persons/persons.module.ts
    MaterialcmpModule,
    MatTableModule
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/persons/persons.module.ts
  ],
  exports: [
    PersonnelComponent,
    StudentsComponent
  ]
})
export class PersonsModule { }
