import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { BasicAuthentication } from '../service/basic-authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  username = "JaydenWNG";
  password = "SeizeTheDay1!";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthentication, 
    private basicAuthentication: BasicAuthentication) {
  }

    handleLogin() {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome/', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleJWTAuthLogin() {
    this.basicAuthentication.executeJWTAuthentication(this.username, this.password).subscribe({
      next: (data) => {
        console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    },
      error: (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    });
  }

    handleBasicAuthLogin() {
    this.basicAuthentication.executeAuthentication(this.username, this.password).subscribe({
      next: (data) => {
        console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    },
      error: (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    });
  }
}