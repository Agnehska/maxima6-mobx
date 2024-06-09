import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../mobx";

const TodoList = observer(() => {
  const { todoStore } = useStores();

  return (
    <ul>
      <li>
        <span className="status__width">Статус</span> 
        <div className="name__width width" >
          <p>Наименование</p>
          <p onClick={() =>  todoStore.setSort('name')}>&dArr;</p>
          <p onClick={() =>  todoStore.setSort('name_back')}>&uArr;</p>
        </div> 
        <div className="date__width date" >
          <p>Дата создания</p>
          <p onClick={() =>  todoStore.setSort('date')}>&dArr;</p>
          <p onClick={() =>  todoStore.setSort('date_back')}>&uArr;</p>
        </div>
      </li>
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
