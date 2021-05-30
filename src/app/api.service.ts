import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseUrl = 'http://nimisha-test-app.infinityfreeapp.com/api';
  baseUrl = 'https://f4fresh.in/nimisha';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        return res;
    }))
  }

  getcompany(idval: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/getById`, { id: idval })
      .pipe(map((res) => {
        return res;
      }))
  }

}
