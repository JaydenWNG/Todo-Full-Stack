import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthentication {
  
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    // console.log('before ' + this.isUserLoggedIn());
    
    if (username === 'JaydenWNG' && password === 'SeizeTheDay1!') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

    executeAuthentication(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basic-auth/hello-world-bean`, {headers})
    .pipe(
      map(data => {
        sessionStorage.setItem('authenticatedUser', username);
        return data;
      })
    );
    // console.log('Hello World Bean Service Executed');
  }

  isUserLoggedIn() {
    if (typeof window !== 'undefined') {
      let user = sessionStorage.getItem('authenticatedUser');
      return !(user == null);
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}