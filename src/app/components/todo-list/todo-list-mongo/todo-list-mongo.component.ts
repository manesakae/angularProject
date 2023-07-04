import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoMongoService } from 'src/app/services/todo-mongo.service';

@Component({
  selector: 'app-todo-list-mongo',
  templateUrl: './todo-list-mongo.component.html',
  styleUrls: ['./todo-list-mongo.component.scss'],
  providers: [TodoMongoService]
})
export class TodoListMongoComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoMongoService){}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
     this.todoService.getAllTodos().subscribe((data: any) => {
      this.todos = data;
     });
  }

  onAddTodo(event: string) {
    let todo = new Todo();
    todo.task = event;
    this.todoService.addTodo(todo).subscribe((data:any) => {
      this.todos = [{id: data.id,...todo}, ...this.todos];
    });
  }

  onStatusChange(event: string) {
    const todo = this.todos.find((todo)=> todo.id == event)
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
      this.todoService.updateTodo(todo, event).subscribe(data => {});
    }
  }

  onDeleteTodo(event: string) {
    this.todoService.deleteTodo(event).subscribe(data => {
      this.todos = this.todos.filter(todo => todo.id != event);
    });
  }
}
