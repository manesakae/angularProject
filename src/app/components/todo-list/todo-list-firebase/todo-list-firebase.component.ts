import { TodoService } from './../../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-firebase',
  templateUrl: './todo-list-firebase.component.html',
  styleUrls: ['./todo-list-firebase.component.scss'],
  providers: [TodoService]
})
export class TodoListFirebaseComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
     this.todoService.getTodos().then(data => {
      this.todos = data;
     });
  }

  onAddTodo(event: string) {
    let todo = new Todo();
    todo.task = event;
    this.todoService.add(todo).then(data => {
      this.todos = [{id: data,...todo}, ...this.todos];
    });
    
  }

  onStatusChange(event: string) {
    const todo = this.todos.find((todo)=> todo.id == event)
    if (todo) {
      this.todoService.updateTodo(event,!todo.isCompleted);
      todo.isCompleted = !todo.isCompleted;
    }
  }

  onDeleteTodo(event: string) {
    this.todoService.deleteTodo(event);
    this.todos = this.todos.filter(todo => todo.id != event);
  }
}
