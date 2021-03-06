import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AssignationComponent } from './academics/assignation/assignation.component';
import { NotesComponent } from './academics/notes/notes.component';
import { ReportsComponent } from './academics/reports/reports.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { MainComponent } from './display/main/main.component';
import { EditClassComponent } from './modals/classe/edit-class/edit-class.component';
import { EditStudentComponent } from './modals/student/edit-student/edit-student.component';
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
  { path: 'editStudent/:matricule', component: EditStudentComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'main', component: MainComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardServiceGuard] },
  { path: 'editClass/:id', component: EditClassComponent, canActivate: [AuthGuardServiceGuard] },
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
