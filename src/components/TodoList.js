import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../mobx";
import SortTodo from "./SortTodo";

const TodoList = observer(() => {
  const { todoStore } = useStores();

  return (
    <ul>
      <SortTodo />
      {todoStore.filteredTodos.map((todo) => (
        <li key={todo.id}>
          <input className="status__width"
            type="checkbox"
            checked={todo.completed}
            onChange={() => todo.toggle()}
          />
          <span className="name__width"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
          <p className="date__width" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>Date: {todo.date.toString("de-DE")} </p>
          <button onClick={() => todoStore.removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
