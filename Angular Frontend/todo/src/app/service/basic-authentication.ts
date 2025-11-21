import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})

export class BasicAuthentication {
  
  constructor(private http: HttpClient) {}


  executeJWTAuthentication(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/authenticate`,{username,password})
    .pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      })
    );
    // console.log('Hello World Bean Service Executed');
  }


  executeAuthentication(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basic-auth/hello-world-bean`, {headers})
    .pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        return data;
      })
    );
    // console.log('Hello World Bean Service Executed');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn() {
    if (typeof window !== 'undefined') {
      let user = sessionStorage.getItem(AUTHENTICATED_USER);
      return !(user == null);
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}