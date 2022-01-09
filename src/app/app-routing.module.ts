import { MainComponent } from './display/main/main.component';
import { ReportsComponent } from './academics/reports/reports.component';
import { NotesComponent } from './academics/notes/notes.component';
import { AssignationComponent } from './academics/assignation/assignation.component';
import { StudentsComponent } from './persons/students/students.component';
import { SchoolsComponent } from './structures/schools/schools.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './structures/classes/classes.component';
import { PersonnelComponent } from './persons/personnel/personnel.component';

const routes: Routes = [
  { path: '', redirectTo: 'class', pathMatch: 'full' },
  { path: 'class', component: ClassesComponent },
  { path: 'personels', component: PersonnelComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'assignation', component: AssignationComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'main', component: MainComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
