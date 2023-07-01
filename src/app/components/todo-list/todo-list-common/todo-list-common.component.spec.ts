import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListCommonComponent } from './todo-list-common.component';

describe('TodoListCommonComponent', () => {
  let component: TodoListCommonComponent;
  let fixture: ComponentFixture<TodoListCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
