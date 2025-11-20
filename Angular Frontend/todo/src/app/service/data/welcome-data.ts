import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeData {
  constructor(private http:HttpClient) {}

  executedHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log('Hello World Bean Service Executed');
    // return { message: 'Hello World from the Backend!' };
  }

    executedHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
    // console.log('Hello World Bean Service Executed');
    // return { message: 'Hello World from the Backend!' };
  }
  
  createBasicAuthenticationHttpHeader() {
    let username = 'JaydenWNG'
    let password = 'SeizeTheDay123!'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
