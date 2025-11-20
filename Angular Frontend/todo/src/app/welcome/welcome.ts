import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common'; // Added
import { WelcomeData } from '../service/data/welcome-data';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
})
export class Welcome implements OnInit {
  message = 'Welcome to the Welcome Page!';
  welcomeMessageFromService: string = '';
  name = "";
  constructor(private route:ActivatedRoute, 
    private service: WelcomeData, 
    private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    console.log(this.message)
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executedHelloWorldBeanService());
    this.service.executedHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomeMessage');
    // console.log("get welcome message");
  }
  

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
    this.cdr.detectChanges();
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.error;
    this.cdr.detectChanges();
  }
}