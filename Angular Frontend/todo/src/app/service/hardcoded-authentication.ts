import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentication {
  
  constructor() {}

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
