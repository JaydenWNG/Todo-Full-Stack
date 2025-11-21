import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos';
import {JPA_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class TodoData {

  constructor(
    private http:HttpClient
  ) { }
  
  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
    // return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
    // return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
    // return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
    // return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo);
    // return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}