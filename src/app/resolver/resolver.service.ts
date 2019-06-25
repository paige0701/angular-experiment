import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<any>> {
    return this.http.get(`	http://dummy.restapiexample.com/api/v1/employees`) as Observable<Array<any>>
  }

  checkRuns(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`) as Observable<any>
  }

  getDetail(id: string): Observable<any> {
    return this.http.get(``) as Observable<any>

  }
}
