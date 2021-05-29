import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private global: GlobalService, private http: HttpClient) {
  }

  homeService(): Observable<any> {
    const url = `${this.global.url}\\home`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('Request is sent!');
    return this.http.get<any>(url, { headers: headers });
  }

  registerCompany(id: number): Observable<any> {
    const url = `${this.global.url}\\RegisterCompany\\${id}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('Request is sent!');
    return this.http.post<any>(url, { headers: headers });
  }

  getProject(id: number): Observable<any> {
    const url = `${this.global.url}\\GetCompany\\${id}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers });
  }

  CanRegister(id:number):Observable<any>{
    const url = `${this.global.url}\\CanRegister\\${id}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers });
  }

}
