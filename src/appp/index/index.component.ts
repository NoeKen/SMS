import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AssignationComponent } from '../academics/assignation/assignation.component';
import { NotesComponent } from '../academics/notes/notes.component';
import { ReportsComponent } from '../academics/reports/reports.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { SigninComponent } from '../authentication/signin/signin.component';
import { MainComponent } from '../display/main/main.component';
import { PersonnelComponent } from '../persons/personnel/personnel.component';
import { StudentsComponent } from '../persons/students/students.component';
import { AdminsService } from '../services/admins.service';
import { ClassesComponent } from '../structures/classes/classes.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path:'classes',component: ClassesComponent },
  { path: 'personels', component: PersonnelComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'assignation', component: AssignationComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'School';
  loginbtn:boolean;
  logoutbtn:boolean;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private adminsService: AdminsService) { }

  ngOnInit(): void {

  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout()
  {
    this.adminsService.deleteToken();
    window.location.href = window.location.href;
  }

  ngAfterViewInit(): void {
    this.observer.observe([' (max-width: 800px) ']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    })
  }
}

export const routingComponents =[routes]
