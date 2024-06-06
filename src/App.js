import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import SearchTodo from "./components/SearchTodo";
import FilterTodo from "./components/FilterTodo";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>MobX Todo List</h1>
      <SearchTodo />
      <FilterTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
