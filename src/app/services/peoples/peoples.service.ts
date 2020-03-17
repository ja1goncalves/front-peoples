import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {People, RegisterPeople} from '../../models/people';
import {toBase64String} from '@angular/compiler/src/output/source_map';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  public headers: HttpHeaders;
  constructor(private http: HttpClient, private route: Router) {
    this.headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(environment.USERNAME + ':' + environment.PASSWORD),
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  public create(requestData: RegisterPeople): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${environment.API_URL}/api/peoples/`, requestData, {headers: this.headers}).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }

  public all(): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${environment.API_URL}/api/peoples/`, {headers: this.headers}).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }

  public find(id: string): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${environment.API_URL}/api/peoples/${id}`, {headers: this.headers}).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }

  public update(requestData: People): Observable<any> {
    return new Observable((observer) => {
      this.http.put(`${environment.API_URL}/api/peoples/`, requestData, {headers: this.headers}).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }
}
