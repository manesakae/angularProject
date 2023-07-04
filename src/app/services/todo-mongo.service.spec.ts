import { TestBed } from '@angular/core/testing';

import { TodoMongoService } from './todo-mongo.service';

describe('TodoMongoService', () => {
  let service: TodoMongoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMongoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
