export class Todo {
  id: number
  name: String
  isDone: boolean = false

  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }
}
