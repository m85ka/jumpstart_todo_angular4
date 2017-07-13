import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/todos';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos() {
    return TODOS;
  }

}
