import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, MDBRootModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademicsModule } from './academics/academics.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DisplayModule } from './display/display.module';
import { PersonsModule } from './persons/persons.module';
import { StructuresModule } from './structures/structures.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

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
  //Classes modules
    AcademicsModule,
    AuthenticationModule,
    DisplayModule,
    PersonsModule,
    StructuresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
