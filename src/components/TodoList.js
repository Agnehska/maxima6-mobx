import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../mobx";

const TodoList = observer(() => {
  const { todoStore } = useStores();

  return (
    <ul>
      {todoStore.todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todo.toggle()}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
          <button onClick={() => todoStore.removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
