import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-common',
  templateUrl: './todo-list-common.component.html',
  styleUrls: ['./todo-list-common.component.scss']
})
export class TodoListCommonComponent {
  @Input() todos: Todo[] = [];
  @Output() clickAddTodoEvent = new EventEmitter<string>();
  @Output() clickStatusChangeEvent = new EventEmitter<string>();
  @Output() clickDeleteEvent = new EventEmitter<string>();
  newTodo: string;

  onAdd() {
    if (this.newTodo) this.clickAddTodoEvent.emit(this.newTodo);
    this.newTodo = '';
  }
  onStatusChange(id: string) {
    this.clickStatusChangeEvent.emit(id);
  }

  onDelete(id: string) {
    this.clickDeleteEvent.emit(id);
  }
}
