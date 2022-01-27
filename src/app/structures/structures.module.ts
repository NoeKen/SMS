import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools/schools.component';
import { ClassesComponent } from './classes/classes.component';
import { MaterialcmpModule } from '../materialcmp/materialcmp.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    SchoolsComponent,
    ClassesComponent,
  ],
  imports: [
    CommonModule,
    MaterialcmpModule,
    MatPaginatorModule,
    MatTableModule

  ],
  exports: [
    SchoolsComponent,
    ClassesComponent,
  ]
})
export class StructuresModule { }
