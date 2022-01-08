import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { MDBBootstrapModule,MDBRootModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule,
    MDBRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
