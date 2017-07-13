import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]
  todoInput: String

  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo(){
    if( this.todoInput ) {
      let todo = new Todo(this.todoInput);
      this.todoService.addTodo( todo )
      this.todoInput = "";
    }
  }

}
