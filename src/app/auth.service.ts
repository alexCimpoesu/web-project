import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()

export class AuthService {
  public token: string;

  isLoggedIn = false;

  redirectUrl: string;
  private headers = new HttpHeaders(); // headers for each request
  private postData;
  private oAuthURL = 'http://proyecto-laravel.io/api/login';
  private accessToken = [];
  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
  }

  getToken(): string {
    if (this.token === null){
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
  login(username: string, password: string): Observable<boolean> {
    this.postData = {
      email: username,
      password: password // the user's password
    };
    return this.http.post(this.oAuthURL, this.postData)
    .map((response => {
        // login successful if there's a jwt token in the response
        if (response) {
          this.setToken(response);
          /*
            // set token property
            this.token = token['token'];

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({email: username, token: token }));

            // return true to indicate successful login
            */
            this.isLoggedIn = true;
            return true;
        } else {
            // return false to indicate failed login
            return false;
        }
    }));
}
setToken(token) {
  localStorage.setItem('permisos', token['permisos']);
  token = token['success'];
  localStorage.setItem('token', token['token']);
  this.headers.append('Authorization', 'Bearer ' + token['token'] ); // add the Authentication header
  this.accessToken = token;  // save the access_token
}
  logout(): void {
    this.isLoggedIn = false;
    // clear token remove user from local storage to log user out
    this.token = null;

    localStorage.removeItem('currentUser');
    localStorage.clear();
}

}
