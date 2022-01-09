import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcademicsModule } from './academics/academics.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DisplayModule } from './display/display.module';
import { PersonsModule } from './persons/persons.module';
import { StructuresModule } from './structures/structures.module';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { MaterialcmpModule } from './materialcmp/materialcmp.module';
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
    AcademicsModule,
    AuthenticationModule,
    DisplayModule,
    PersonsModule,
    StructuresModule,
    MaterialcmpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
