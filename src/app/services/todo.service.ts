import { Injectable, inject } from '@angular/core';
import { Firestore, collection, CollectionReference, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { DocumentData, getDocs, QuerySnapshot, doc } from 'firebase/firestore';
import { Todo } from '../models/todo';

// @Injectable({
//   providedIn: TodoListModule
// })
export class TodoService {
  db: Firestore = inject(Firestore);
  todoCollection: CollectionReference;

  constructor(){
    this.todoCollection = collection(this.db, 'todos');
  }

  transformTodoCollection(snapshot: QuerySnapshot<DocumentData>) {
    let result : Todo[]= [];
    snapshot.docs.forEach((todo) => {
      result.push({...todo.data() as Todo, id: todo.id})
    })
    return result;
  }

  async getTodos(){
    const data = await getDocs(this.todoCollection);
    return this.transformTodoCollection(data);
  }

  async add(todo: Todo){
    const result =  await addDoc(this.todoCollection, {...todo} )
    return  result.id;
    
  }

  async deleteTodo(docId: string){
    await deleteDoc(doc(this.db, 'todos', docId));
  }

  async updateTodo(docId: string, status: boolean){
    await updateDoc(doc(this.db, 'todos', docId), {isCompleted: status})
  }
}
