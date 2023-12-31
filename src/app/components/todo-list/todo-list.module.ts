import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListFirebaseComponent } from './todo-list-firebase/todo-list-firebase.component';
import { TodoListSimpleComponent } from './todo-list-simple/todo-list-simple.component';
import { TodoListCommonComponent } from './todo-list-common/todo-list-common.component';
import { environment } from 'src/environments/environment';
import { TodoListMongoComponent } from './todo-list-mongo/todo-list-mongo.component';

@NgModule({
  declarations: [
    TodoListFirebaseComponent,
    TodoListSimpleComponent,
    TodoListCommonComponent,
    TodoListMongoComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  // providers: [TodoService],
})
export class TodoListModule { }
