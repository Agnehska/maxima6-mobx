import React, { useState } from "react";
import { useStores } from "../mobx";

const AddTodo = () => {
  const { todoStore } = useStores();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      todoStore.addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
