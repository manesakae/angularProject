import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[]= [];
  newTask: string = '';

  saveTodo(){
    if (this.newTask) {
      let todo = new Todo();
      todo.task = this.newTask;
      this.todos = [...this.todos, todo];
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
