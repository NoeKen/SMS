import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MaterialcmpModule } from '../materialcmp/materialcmp.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialcmpModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidenavComponent
  ]
})
export class DisplayModule { }
