import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule, MDBRootModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/extensions/mdbootstrap.module';
import { AboutComponent } from './about/about.component';
import { AcademicsModule } from './academics/academics.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { DisplayModule } from './display/display.module';
import { ModalsModule } from './modals/modals.module';
import { PersonsModule } from './persons/persons.module';
import { StructuresModule } from './structures/structures.module';
<<<<<<< HEAD:src/appp/app.module.ts
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MaterialcmpModule } from './materialcmp/materialcmp.module';
=======
import { IndexComponent } from './index/index.component';


>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
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
    NgbModule,
    HttpClientModule,
    // MaterialcmpModule,
    // MatIconModule,
  //Classes modules
    AcademicsModule,
    AuthenticationModule,
    DisplayModule,
    PersonsModule,
    StructuresModule,
    MaterialcmpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
