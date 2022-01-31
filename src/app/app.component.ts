import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AdminsService } from './services/admins.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'School';
  loginbtn:boolean;
  logoutbtn:boolean;
  isLoggedIn:boolean

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, public adminsService: AdminsService) {
    console.log('isLoggedIn : ', this.isLoggedIn);
    console.log('userToken : ', adminsService.getToken());

    adminsService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.adminsService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
     this.loginbtn=true;
     this.logoutbtn=false
    }


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
  this.sidenav.close();
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



