import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Matiere } from '../interfaces/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatServiceService {

  redirectUrl:string;

  baseUrl="http://localhost/tp301/matiere";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {

   }

  public addMat(mat : Matiere){
    return this.http.put(this.baseUrl + '/add.php', mat)
    .pipe(map((res: any) => {
      return res['data'];
    }));
    // .pipe(map(Admin =>{
    //   this.setToken(Admin[0].token);
    //   this.getLoggedInName.emit(true);
    //   return Admin;
    // }))
  }

  public getMat(){
    return this.http.get<Matiere[]>(this.baseUrl+ '/listClasses.php');
  }

  deleteMat(institule:string){
    return this.http.delete<Matiere[]>(this.baseUrl+ '/deleteClass.php?class_id=' + institule)
    // const params = new HttpParams()
    //   .set('id', id.toString());

    // return this.http.delete(`${this.baseUrl}/deleteClass.php`, { params: id });
  }
}
