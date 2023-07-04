import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListMongoComponent } from './todo-list-mongo.component';

describe('TodoListMongoComponent', () => {
  let component: TodoListMongoComponent;
  let fixture: ComponentFixture<TodoListMongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListMongoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
