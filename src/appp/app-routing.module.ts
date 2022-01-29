import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AssignationComponent } from './academics/assignation/assignation.component';
import { NotesComponent } from './academics/notes/notes.component';
import { ReportsComponent } from './academics/reports/reports.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SigninComponent } from './authentication/signin/signin.component';
<<<<<<< HEAD:src/appp/app-routing.module.ts
// import { MainComponent } from './display/main/main.component';
import { PersonnelComponent } from './persons/personnel/personnel.component';
import { ClassesComponent } from './structures/classes/classes.component';
// import { StudentsComponent } from './persons/students/students.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'classes', component: ClassesComponent },
  { path: 'personels', component: PersonnelComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'assignation', component: AssignationComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
=======
import { MainComponent } from './display/main/main.component';
import { PersonnelComponent } from './persons/personnel/personnel.component';
import { StudentsComponent } from './persons/students/students.component';
import { AuthGuardServiceGuard } from './services/auth-guard-service.guard';
import { ClassesComponent } from './structures/classes/classes.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path:'classes',component: ClassesComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'personels', component: PersonnelComponent,canActivate: [AuthGuardServiceGuard] },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'assignation', component: AssignationComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'main', component: MainComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardServiceGuard] },
>>>>>>> 7a1bb407e6b39f3b960c27a3163550080367e5fe:src/app/app-routing.module.ts
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent},
  // { path: 'index', component: RegisterComponent, canActivate: [AuthGuardServiceGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[AuthenticationComponent]
