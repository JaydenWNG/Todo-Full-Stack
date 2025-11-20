import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu/menu'; // Added Menu
import { Footer } from './footer/footer'; // Added Footer
import { RouteGuard } from './service/route-guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorBasicAuth } from './service/http/http-interceptor-basic-auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Menu, Footer, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuth, multi: true}],
})
export class App {
  title = signal('todo');
  message = signal('Welcome to JayG website!');
}
