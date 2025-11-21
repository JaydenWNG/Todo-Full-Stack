import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuth implements HttpInterceptor{
  
  constructor () {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = 'JaydenWNG'
    let password = 'SeizeTheDay1!'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(req);
  }
}
