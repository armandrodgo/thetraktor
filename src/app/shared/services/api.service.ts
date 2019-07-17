import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Member } from '../classes/member';
import { Session } from '../classes/session';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private apiURLmembers = `${environment.API_URL}clientes`;
  /* private apiURLsessions = `${environment.API_URL}sessions`; */
  private apiURLsessions = environment.API_URL;


  // MEJORA -> Para todos clientes y sessions - private baseURL = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

 /* getMembers$() {
    return this.http.get('http://localhost:3000/clientes');
  }*/
  getMembers$() {
    return this.http.get<Member[]>(this.apiURLsessions+'clientes');
  }


  /*getMember$(id: string) {
    return this.http.get<Member>(`http://localhost:3000/clientes/${id}`);
  }*/
  getMember$(id: string) {
    // this.apiURL += id;
    // Correccion falta / -->this.apiURLmembers += id;
    //this.apiURLmembers += `/${id}`;
    return this.http.get<Member>(this.apiURLsessions+ `clientes/${id}`);
  }

  /*addMember$(member: Member) {
    return this.http.post<Member>('http://localhost:3000/clientes', member)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((member: Member) => console.log(`added member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }*/
  addMember$(member: Member) {
    return this.http.post<Member>(this.apiURLsessions+'clientes', member)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((member: Member) => console.log(`added member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }
  /*
  deleteMember$(id: string) {
    return this.http.delete(`http://localhost:3000/clientes/${id}`);
  }*/
  deleteMember$(id: string) {
    // return this.http.delete(`this.apiURLmembers${id}`);
    // Correccion falta / -->this.apiURLmembers += id;
    //this.apiURLmembers += `/${id}`;
    return this.http.delete(this.apiURLsessions+ `clientes/${id}`);
  }

  /*editMember$(member: Member) {
    return this.http.put<Member>('http://localhost:3000/clientes', member)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((member: Member) => console.log(`edited member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }*/
  editMember$(member: Member) {
    return this.http.put<Member>(this.apiURLsessions+'clientes', member)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((member: Member) => console.log(`edited member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  /**** SESSIONS  ****/
  // ${environment.API_URL}
  /*getSessions$() {
    return this.http.get('http://localhost:3000/sessions');
  }*/
  getSessions$() {
    // return this.http.get(`${environment.API_URL}sessions`);
    return this.http.get<Session[]>(this.apiURLsessions+'sessions');
  }s

  /*getSession$(id: string) {
    return this.http.get<Session>(`http://localhost:3000/sessions/${id}`);
  }*/
  getSession$(id: string) {
    // return this.http.get<Session>(`${environment.API_URL}sessions/${id}`);
    // Correccion falta / -->this.apiURLsessions += id;
    /* this.apiURLsessions += `/${id}`; */
    return this.http.get<Session>(this.apiURLsessions+ `sessions/${id}`);
  }

  /*addSession$(session: Session) {
    return this.http.post<Session>('http://localhost:3000/sessions', session)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((session: Session) => console.log(`added member: id=${session.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }*/
  addSession$(session: Session) {
    return this.http.post<Session>(this.apiURLsessions, session)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((session: Session) => console.log(`added member: id=${session.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  /*deleteSession$(id: string) {
    return this.http.delete(`http://localhost:3000/sessions/${id}`);
  }*/
  deleteSession$(id: string) {
    // Correccion falta / -->this.apiURLsessions += id;
    this.apiURLsessions += `/${id}`;
    return this.http.delete(this.apiURLsessions);
  }
}
