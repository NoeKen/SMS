import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
<<<<<<< HEAD:src/appp/materialcmp/materialcmp.module.ts
import { MatExpansionModule } from '@angular/material/expansion';

const MateriaComponents = [
  MatSidenavModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatIconModule, 
  MatDividerModule, 
  MatListModule,
  MatExpansionModule
=======
import { MatDialog } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

const MateriaComponents = [
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatDialog,
  MatDivider,
>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/materialcmp/materialcmp.module.ts
]
@NgModule({
  imports: [MateriaComponents],
  exports: [MateriaComponents]
})
export class MaterialcmpModule { }
