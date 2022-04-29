import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    let loginInfo = { username: userName, password: password };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap((data) => {
          this.currentUser = <IUser>data['user'];
          this.loggedIn = true;
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }
  logoutUser() {
    this.loggedIn = false;
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post('/api/logout', {}, options);
  }

  isAuthenticated() {
    return this.loggedIn;
  }

  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentUser(formValues: any) {
    this.currentUser.firstName = formValues.firstName;
    this.currentUser.lastName = formValues.lastName;

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser,
      options
    );
  }
}
