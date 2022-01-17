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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialcmpModule } from './materialcmp/materialcmp.module';
import { ModalsModule } from './modals/modals.module';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    ModalsModule,
    FormsModule,
    // MaterialcmpModule,
    // MatIconModule,
  //Classes modules
    AcademicsModule,
    AuthenticationModule,
    DisplayModule,
    PersonsModule,
    StructuresModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
