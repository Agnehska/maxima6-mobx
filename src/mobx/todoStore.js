import { makeAutoObservable } from "mobx";

class Todo {
  id = Math.random();
  title = "";
  completed = false;

  constructor(title) {
    makeAutoObservable(this);
    this.title = title;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push(new Todo(title));
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get pendingTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}

const todoStore = new TodoStore();
export default todoStore;
