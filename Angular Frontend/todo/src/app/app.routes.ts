// import { Todo } from './todo/todo';

// import { RouteGuardService } from './service/route-guard.service';

// import { Logout } from './logout/logout';

import { ListTodos } from './list-todos/list-todos';

import { Welcome } from './welcome/welcome';

import { Routes } from '@angular/router';

import { Login } from './login/login';

import { Error } from './error/error';

import { Logout } from './logout/logout';

import { Todo } from './todo/todo';

import { RouteGuard } from './service/route-guard';



// welcome

export const routes: Routes = [

{ path: '', component: Login },//canActivate, RouteGuardService

{ path: 'login', component: Login },

{ path: 'welcome/:name', component: Welcome, canActivate: [RouteGuard]},

{ path: 'todos', component: ListTodos, canActivate: [RouteGuard]},

{ path: 'logout', component: Logout, canActivate: [RouteGuard]},

{ path: 'todos/:id', component: Todo, canActivate: [RouteGuard]},

{ path: '**', component: Error }

];