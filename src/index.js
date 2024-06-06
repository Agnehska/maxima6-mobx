import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { storesContext } from "./mobx/index";
import todoStore from "./mobx/todoStore"; // Добавляем импорт

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <storesContext.Provider value={{ todoStore }}>
        <App />
      </storesContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
