import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'

const MateriaComponents = [
  MatSidenavModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatIconModule, 
  MatDividerModule, 
  MatListModule
]
@NgModule({
  imports: [MateriaComponents],
  exports: [MateriaComponents]
})
export class MaterialcmpModule { }
