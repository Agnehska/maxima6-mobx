import React from "react";
import todoStore from "./todoStore";

export const storesContext = React.createContext({
  todoStore,
});

export const useStores = () => React.useContext(storesContext);
