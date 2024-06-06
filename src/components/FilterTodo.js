import React from "react";
import { useStores } from "../mobx";
import { observer } from "mobx-react-lite";

const FilterTodo = observer(() => {
  const { todoStore } = useStores();

  console.log(todoStore.filter);

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    todoStore.setFilter(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={todoStore.filter === "all"}
          onChange={handleFilterChange}
          name="1"
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={todoStore.filter === "completed"}
          onChange={handleFilterChange}
          name="1"
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          value="pending"
          checked={todoStore.filter === "pending"}
          onChange={handleFilterChange}
          name="1"
        />
        Pending
      </label>
    </div>
  );
});

export default FilterTodo;
