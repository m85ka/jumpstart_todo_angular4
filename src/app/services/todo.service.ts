import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/todos';
import { Todo } from '../models/todo';


@Injectable()
export class TodoService {

  constructor() { }

  getTodos() {
    return TODOS;
  }

  addTodo(todo: Todo) {
    TODOS.push(todo);
  }

}
