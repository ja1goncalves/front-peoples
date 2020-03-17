import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {People, RegisterPeople} from '../../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  constructor(private http: HttpClient, private route: Router) { }

  public create(requestData: RegisterPeople): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${environment.API_URL}/api/peoples/`, requestData).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }

  public all(): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${environment.API_URL}/api/peoples/`).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }

  public find(id: string): Observable<any> {
    return new Observable((observer) => {
      this.http.get(`${environment.API_URL}/api/peoples/${id}`).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }

  public update(requestData: People): Observable<any> {
    return new Observable((observer) => {
      this.http.put(`${environment.API_URL}/api/peoples/`, requestData).subscribe(
        (response: any) => {  observer.next(response); },
        (error) => { observer.error(error.error); }
      );
    });
  }
}
