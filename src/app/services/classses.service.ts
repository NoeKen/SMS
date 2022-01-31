import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Class } from '../interfaces/class';

@Injectable({
  providedIn: 'root'
})
export class ClasssesService {

  redirectUrl:string;

  baseUrl="http://localhost/tp301/classe";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {

   }

  public addClass(classe : Class){
    return this.http.put(this.baseUrl + '/addClass.php', classe)
    .pipe(map((res: any) => {
      return res['data'];
    }));
    // .pipe(map(Admin =>{
    //   this.setToken(Admin[0].token);
    //   this.getLoggedInName.emit(true);
    //   return Admin;
    // }))
  }

  public getClasses(){
    return this.http.get<Class[]>(this.baseUrl+ '/listClasses.php');
  }

  deleteClass(id:number){
    return this.http.delete<Class[]>(this.baseUrl+ '/deleteClass.php?class_id=' + id)
    // const params = new HttpParams()
    //   .set('id', id.toString());

    // return this.http.delete(`${this.baseUrl}/deleteClass.php`, { params: id });
  }
}
