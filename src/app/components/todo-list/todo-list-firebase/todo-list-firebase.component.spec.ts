import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFirebaseComponent } from './todo-list-firebase.component';

describe('TodoListFirebaseComponent', () => {
  let component: TodoListFirebaseComponent;
  let fixture: ComponentFixture<TodoListFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListFirebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
