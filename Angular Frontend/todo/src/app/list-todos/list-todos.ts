import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common'; // Added
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe], // Added
  templateUrl: './list-todos.html',
  styleUrls: ['./list-todos.css'],
  standalone: true,
})

export class ListTodos implements OnInit {
  todos: Todo[] = [];
  message: string = '';
  // todos = [
    // new Todo(1, 'Learn to Dance', false, new Date()),
    // new Todo(2, 'Become an Expert in Angular', false, new Date()),
    // new Todo(3, 'Visit India', false, new Date()),
    // {id: 1, description: 'Learn to Dance'},
    // {id: 2, description: 'Become an Expert in Angular'},
    // {id: 3, description: 'Visit India'},
  // ];
  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance',
  // }

  constructor(
    private todoService: TodoData,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('JaydenWNG').subscribe(
      response => {
        console.log(response);
        this.todos = response;
        this.cdr.detectChanges();
      }
    );
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('JaydenWNG', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: any) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
