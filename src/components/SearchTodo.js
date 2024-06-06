import React, { useState } from "react";
import { useStores } from "../mobx";

const SearchTodo = () => {
  const { todoStore } = useStores();
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    todoStore.setSearchQuery(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search tasks"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default SearchTodo;
