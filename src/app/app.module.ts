import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MDBRootModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent
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
