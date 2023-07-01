import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListFirebaseComponent } from './todo-list-firebase/todo-list-firebase.component';
import { TodoListSimpleComponent } from './todo-list-simple/todo-list-simple.component';
import { TodoListCommonComponent } from './todo-list-common/todo-list-common.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    TodoListFirebaseComponent,
    TodoListSimpleComponent,
    TodoListCommonComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  // providers: [TodoService],
})
export class TodoListModule { }
