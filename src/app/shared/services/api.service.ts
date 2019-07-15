import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Member } from '../classes/member';
import { Session } from '../classes/session';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMembers$() {
    return this.http.get('http://localhost:3000/clientes');
  }

  getMember$(id: string) {
    return this.http.get<Member>(`http://localhost:3000/clientes/${id}`);
  }

  addMember$(member: Member) {
    return this.http.post<Member>('http://localhost:3000/clientes', member)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((member: Member) => console.log(`added member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  deleteMember$(id: string) {
    return this.http.delete(`http://localhost:3000/clientes/${id}`);
  }

  editMember$(member: Member) {
    return this.http.put<Member>('http://localhost:3000/clientes', member)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((member: Member) => console.log(`edited member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  /**** SESSIONS  ****/
  getSessions$() {
    return this.http.get('http://localhost:3000/sessions');
  }

  getSession$(id: string) {
    return this.http.get<Session>(`http://localhost:3000/sessions/${id}`);
  }

  addSession$(session: Session) {
    return this.http.post<Session>('http://localhost:3000/sessions', session)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap((session: Session) => console.log(`added member: id=${session.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  deleteSession$(id: string) {
    return this.http.delete(`http://localhost:3000/sessions/${id}`);
  }
}
