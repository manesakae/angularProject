import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-simple',
  templateUrl: './todo-list-simple.component.html',
  styleUrls: ['./todo-list-simple.component.scss']
})
export class TodoListSimpleComponent {
  todos: Todo[]= [];
  newTask: string = '';

  saveTodo(){
    if (this.newTask) {
      let todo = new Todo();
      todo.task = this.newTask;
      this.todos.push(todo);
      this.newTask = '';
    }
  }

  completeTask(index: number){
    this.todos[index].isCompleted = !this.todos[index].isCompleted ;
  }

  removeTask(index: number){
    this.todos.splice(index, 1);
  }
}
