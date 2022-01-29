import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools/schools.component';
import { ClassesComponent } from './classes/classes.component';
<<<<<<< HEAD:src/appp/structures/structures.module.ts
import { MaterialcmpModule } from '../materialcmp/materialcmp.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
=======
import { MatIconModule } from '@angular/material/icon';

>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/structures/structures.module.ts


@NgModule({
  declarations: [
    SchoolsComponent,
    ClassesComponent,
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD:src/appp/structures/structures.module.ts
    MaterialcmpModule,
    MatPaginatorModule,
    MatTableModule

=======
    MatIconModule,
>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/structures/structures.module.ts
  ],
  exports: [
    SchoolsComponent,
    ClassesComponent,
  ]
})
export class StructuresModule { }
