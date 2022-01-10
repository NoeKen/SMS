import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, MDBRootModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
import { AcademicsModule } from './academics/academics.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DisplayModule } from './display/display.module';
import { PersonsModule } from './persons/persons.module';
import { StructuresModule } from './structures/structures.module';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD

import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { MaterialcmpModule } from './materialcmp/materialcmp.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MDBRootModule } from 'angular-bootstrap-md';
=======
import { AboutComponent } from './about/about.component';

>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule,
    MDBRootModule,
<<<<<<< HEAD
=======
  //Classes modules
>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
    AcademicsModule,
    AuthenticationModule,
    DisplayModule,
    PersonsModule,
    StructuresModule,
<<<<<<< HEAD
    MaterialcmpModule,
    RouterModule
=======

>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
