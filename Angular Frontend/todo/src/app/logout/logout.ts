import { Component } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit {
  constructor(
    private hardcodedAuthentication: HardcodedAuthentication
  ){ }

  ngOnInit() {
    this.hardcodedAuthentication.logout();
  }
  
}
