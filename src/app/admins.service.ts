import { Admin } from './admin';
import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  redirectUrl:string;

  baseUrl="http://localhost/tp301/administratif";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  

  constructor(private http:HttpClient) { }
  public userlogin(name, password) {
    return this.http.post<any>(this.baseUrl + '/login.php', { name, password })
        .pipe(map(Admin => {
            this.setToken(Admin[0].name);
            this.getLoggedInName.emit(true);
            return Admin;
        }));
}
  public userregistration(admin:Admin) {
    return this.http.post<any>(this.baseUrl + '/insert.php', {data:admin })
        .pipe(map((res: any) => {
          return res['data'];
        }));
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  
   
  getToken() {
    return localStorage.getItem('token');
  }
   
  deleteToken() {
    localStorage.removeItem('token');
  }
   
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}







