import { MainComponent } from './display/main/main.component';
import { ReportsComponent } from './academics/reports/reports.component';
import { NotesComponent } from './academics/notes/notes.component';
import { AssignationComponent } from './academics/assignation/assignation.component';
import { StudentsComponent } from './persons/students/students.component';
import { SchoolsComponent } from './structures/schools/schools.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ClassesComponent } from './structures/classes/classes.component';
import { PersonnelComponent } from './persons/personnel/personnel.component';

const routes: Routes = [
  { path: '', redirectTo: 'class', pathMatch: 'full' },
=======
import { AboutComponent } from './about/about.component';
import { AssignationComponent } from './academics/assignation/assignation.component';
import { NotesComponent } from './academics/notes/notes.component';
import { ReportsComponent } from './academics/reports/reports.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ClassesComponent } from './classes/classes.component';
import { MainComponent } from './display/main/main.component';
import { PersonnelComponent } from './persons/personnel/personnel.component';
import { StudentsComponent } from './persons/students/students.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path:'classes',component: ClassesComponent },
  { path:'classes',component: ClassesComponent },
>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
  { path: 'class', component: ClassesComponent },
  { path: 'personels', component: PersonnelComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'assignation', component: AssignationComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'main', component: MainComponent },
<<<<<<< HEAD


=======
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
>>>>>>> abf3b994d9f5a500ca140f246110e96095247002
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[AuthenticationComponent]
