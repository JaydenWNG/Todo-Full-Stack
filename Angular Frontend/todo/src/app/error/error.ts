import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {

  errorMessage = "An unexpected error has occurred! Contact Support at jjwong@persys-tech.com"
}
