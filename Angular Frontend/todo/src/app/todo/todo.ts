import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Todo as TodoOne} from '../list-todos/list-todos';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit {

  id: number = 0;
  todo: TodoOne = new TodoOne(this.id, '', false, new Date());

  constructor(
    private todoService: TodoData,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  )
  {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.todo = new TodoOne(this.id, '', false, new Date());
    if(this.id != -1){
    this.todoService.retrieveTodo('JaydenWNG', this.id).subscribe(
      data => {
        this.todo = data;
        this.cdr.detectChanges();
      }
    );
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('JaydenWNG', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }else {
    this.todoService.updateTodo('JaydenWNG', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }
    );
  }
  }
}
