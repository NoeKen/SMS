import { Teacher } from './../interfaces/class';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  baseUrl="http://localhost/tp301/enseignant";
  constructor( private httpClient: HttpClient) { }

  createTeacher(teacher: Teacher): Observable<Teacher>{
    return this.httpClient.post<Teacher>(`${this.baseUrl}/add.php`, teacher)
    .pipe(map((res: any) => {
      return res['data'];
    }));
  }

}
