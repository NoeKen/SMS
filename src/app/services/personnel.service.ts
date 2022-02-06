import { Eleve } from './../interfaces/eleve';
import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Enseignant } from '../interfaces/enseignant';


@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  redirectUrl:string;

  baseUrl="http://localhost/tp301/enseignant";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {

   }


  // public addEleve(eleve : Eleve){
  //   return this.http.put(this.baseUrl + '/addEleve.php', eleve)
  //   .pipe(map((res: any) => {
  //     return res['data'];
  //   }));
  //   // .pipe(map(Admin =>{
  //   //   this.setToken(Admin[0].token);
  //   //   this.getLoggedInName.emit(true);
  //   //   return Admin;
  //   // }))
  // }

  public getPersonnels(){
    return this.http.get<Enseignant[]>(this.baseUrl+ '/getPersonnels.php');
  }

//   getEleveById(Matricule: String){
//     return this.http.get<Eleve[]>(this.baseUrl+ '/getEleveById.php?Matricule=' + Matricule);
//   }

//   getEleveByClass(Matricule: String, classe: number){
//     return this.http.get<Eleve[]>(this.baseUrl+ '/getStudentByClass.php?Matricule=' + Matricule+ 'classId='+classe);
//   }

//   updateEleve(eleve : Eleve) {
//     return this.http.put(this.baseUrl+ '/updateEleve.php?Matricule=' + eleve.Matricule, eleve);

// }

//   deleteEleve(matricule:string){
//     return this.http.delete<Eleve[]>(this.baseUrl+ '/deleteEleve.php?matricule=' + matricule);
//     // const params = new HttpParams()
//     //   .set('id', id.toString());

//     // return this.http.delete(`${this.baseUrl}/deleteClass.php`, { params: id });
//   }
}
