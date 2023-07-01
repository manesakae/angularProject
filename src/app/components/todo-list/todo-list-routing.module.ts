import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListFirebaseComponent } from './todo-list-firebase/todo-list-firebase.component';
import { TodoListSimpleComponent } from './todo-list-simple/todo-list-simple.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-simple', pathMatch: 'full'},
  {path: 'list-simple', component: TodoListSimpleComponent},
  {path: 'list-firebase', component: TodoListFirebaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
