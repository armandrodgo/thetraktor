import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserInterface } from '../interfaces/user-interface';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  private auth_url = environment.API_URL;

  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged());

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  registerUser(name: string, email: string, password: string) {

    /* const url_api = 'http://localhost:3000/register'; */
    this.auth_url += 'register';

    return this.http
      .post<UserInterface>(
        this.auth_url,
        {
          name,
          email,
          password
        },
        { headers: this.headers }
      )
      .pipe(tap(data => data),
      catchError(error => {console.log(error);
                           return throwError(error); }));
  }

  loginuser(email: string, password: string): Observable<any> {

    /* const url_api = 'http://localhost:3000/login'; */
    this.auth_url += 'login';

    return this.http
      .post<UserInterface>(
        this.auth_url,
        { email, password },
        { headers: this.headers }
      )
      .pipe(tap(data => {
        localStorage.setItem('isLogged','true');
        this.isLogged.next(true);
        return data}),
      catchError(error => {console.log(error);
                           return throwError(error); }));
  }


  registeruser(email: string, password: string): Observable<any> {

    /* const url_api = 'http://localhost:3000/register'; */
    this.auth_url += 'register';

    return this.http
      .post<UserInterface>(
        this.auth_url,
        { email, password },
        { headers: this.headers }
      )
      .pipe(tap(data => {
        localStorage.setItem('isLogged','true');
        this.isLogged.next(true);
        return data}),
      catchError(error => {console.log(error);
                           return throwError(error); }));
  }

/*   setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  } */

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else {
      return null;
    }

  }

/*   getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
 */
  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLogged');
  }

  getLogged():boolean{
    if(localStorage.getItem('isLogged')==='true'){
      return true;
    }else {return false};

    /* localStorage.set Item("isLogged", this.user.username);
    this.userType.next(this.user.username);
    this._router.navigate(['/Admin']);
    return true; */
   }
}
