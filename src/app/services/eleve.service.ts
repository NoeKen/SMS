import { Eleve } from './../interfaces/eleve';
import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EleveService {
  redirectUrl:string;

  baseUrl="http://localhost/tp301/eleve";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {

   }


  public addEleve(eleve : Eleve){
    return this.http.put(this.baseUrl + '/addEleve.php', eleve)
    .pipe(map((res: any) => {
      return res['data'];
    }));
    // .pipe(map(Admin =>{
    //   this.setToken(Admin[0].token);
    //   this.getLoggedInName.emit(true);
    //   return Admin;
    // }))
  }

  public getEleves(){
    return this.http.get<Eleve[]>(this.baseUrl+ '/listEleve.php');
  }

  getEleveById(Matricule: String){
    return this.http.get<Eleve[]>(this.baseUrl+ '/getEleveById.php?Matricule=' + Matricule);
  }

  updateEleve(eleve : Eleve) {
    return this.http.put(this.baseUrl+ '/updateEleve.php?Matricule=' + eleve.Matricule, eleve);

}

  deleteEleve(matricule:string){
    return this.http.delete<Eleve[]>(this.baseUrl+ '/deleteEleve.php?matricule=' + matricule);
    // const params = new HttpParams()
    //   .set('id', id.toString());

    // return this.http.delete(`${this.baseUrl}/deleteClass.php`, { params: id });
  }
}
