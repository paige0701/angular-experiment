import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Array<any>> {
    return this.http.get(``) as Observable<Array<any>>
  }

  getDetail(id: string): Observable<any> {
    return this.http.get(``) as Observable<any>

  }
}
