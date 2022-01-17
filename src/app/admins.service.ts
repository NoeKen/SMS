import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  redirectUrl:string;

  baseUrl="http://localhost/tp301/administratif";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) { }

  public getAmins(){
    return this.http.get<Admin[]>(this.baseUrl + '/getUsers.php');
  }

  public userlogin(tel, password) {
    return this.http.post<Admin>(this.baseUrl + '/login.php', { tel, password })
        .pipe(map(Admin => {
            this.setToken(Admin[0].name);
            this.getLoggedInName.emit(true);
            return Admin;
        }));
}
  public userRegistration(admin:Admin) {
    return this.http.post(this.baseUrl + '/register.php', admin )
        // .pipe(map((res: any) => {
        //   return res['data'];
        // }));
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


















// import { Injectable, Output, EventEmitter } from '@angular/core'
// import { map } from 'rxjs/operators'
// import { HttpClient } from '@angular/common/http'
// import { Admin } from './admin'

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminsService {
//   redirectUrl: string
//   baseUrl: string = 'http://localhost/tp301/administratif'
//   @Output() getLoggedInName: EventEmitter<any> = new EventEmitter()

//   constructor(private httpClient: HttpClient) {}

//   public userlogin(tel, password) {
//     alert(tel)
//     return this.httpClient
//       .post<any>(this.baseUrl + '/login.php', { tel, password })
//       .pipe(map(Admin => {
//         this.setToken(Admin[0].name);
//         this.getLoggedInName.emit(true);
//         return Admin;
//         }));
//   }

//   public userregistration(name, tel, pasword) {
//     return this.httpClient
//       .post<any>(this.baseUrl + '/insert.php', { name, tel, pasword })
//       .pipe(
//         map((Admin) => {
//           return Admin
//         }),
//       )
//   }

//   //token
//   setToken(token: string) {
//     localStorage.setItem('token', token)
//   }
//   getToken() {
//     return localStorage.getItem('token')
//   }
//   deleteToken() {
//     localStorage.removeItem('token')
//   }
//   isLoggedIn() {
//     const usertoken = this.getToken()
//     if (usertoken != null) {
//       return true
//     }
//     return false
//   }
// }

