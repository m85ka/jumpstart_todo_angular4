import { Injectable } from '@angular/core';
import { TODOS } from '../mocks/todos';
import { Todo } from '../models/todo';


@Injectable()
export class TodoService {
  currentId: number

  constructor() {
    this.currentId = TODOS.length;
  }

  getTodos(): Todo[] {
    return TODOS;
  }

  addTodo(todoName: String) {
    let todo = new Todo(this.currentId, todoName);
    TODOS.push(todo);
    this.currentId++;
  }

  getRemaining(): Todo[]{
    return TODOS.filter( todo => !todo.isDone );
  }

  removeTodo(todoId: number) {
    console.log(todoId);
  }

}
