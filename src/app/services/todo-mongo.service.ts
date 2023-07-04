import { environment } from './../../environments/environment.development';
import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoMongoService {
  http = inject(HttpClient);
  constructor() {  }

  getAllTodos(){
    return this.http.get<{success: boolean, results: Todo[]}>(`${environment.baseUrl}/todos`)
    .pipe(
      map(
        (res)=> res.results
        )
      );
  }

  addTodo(todo: Todo){
    return this.http.post<{success: boolean, results: Todo}>(`${environment.baseUrl}/todos`, todo)
    .pipe(map((res)=> res.results));
  }

  updateTodo(todo: Todo, id: string){
    return this.http.put<{sucess: boolean, results: any}>(`${environment.baseUrl}/todos/${id}`, todo);
  }

  deleteTodo(id: string){
    return this.http.delete<{sucess: boolean, results: any}>(`${environment.baseUrl}/todos/${id}`);
  }
}
