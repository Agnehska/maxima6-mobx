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
  searchQuery = "";
  filter = "all";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push(new Todo(title));
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get pendingTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  setFilter(filter) {
    console.log(filter);
    console.log(this.filter);
    this.filter = filter;
    console.log(this.filter);
  }

  get filteredTodos() {
    const query = this.searchQuery.toLowerCase();

    let filtered = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(query)
    );

    // if (this.filter === "all") {
    //   filtered = this.todos.filter((todo) =>
    //     todo.title.toLowerCase().includes(query)
    //   );
    // }
    if (this.filter === "completed") {
      filtered = filtered.filter((todo) => todo.completed);
    }
    if (this.filter === "pending") {
      filtered = filtered.filter((todo) => !todo.completed);
    }

    return filtered;
  }
}

const todoStore = new TodoStore();
export default todoStore;
