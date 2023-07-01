import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSimpleComponent } from './todo-list-simple.component';

describe('TodoListSimpleComponent', () => {
  let component: TodoListSimpleComponent;
  let fixture: ComponentFixture<TodoListSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
