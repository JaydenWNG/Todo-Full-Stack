import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'], // not styleUrl
  imports: [RouterLink, NgIf]       // only needed for standalone components
})
export class Menu implements OnInit { // add implements OnInit
  // isUserLoggedIn = false;

  constructor(public hardcodedAuthentication: HardcodedAuthentication) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn(); // calling directly authentication service in html is better
  }
}