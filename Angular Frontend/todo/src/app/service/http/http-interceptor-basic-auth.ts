import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthentication } from '../basic-authentication';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuth implements HttpInterceptor{
  
  constructor (
    private basicAuthentication: BasicAuthentication
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 'JaydenWNG'
    // let password = 'SeizeTheDay1!'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthentication.getAuthenticatedToken();
    let username = this.basicAuthentication.getAuthenticatedUser();
    if (username && basicAuthHeaderString) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(req);
  }
}
