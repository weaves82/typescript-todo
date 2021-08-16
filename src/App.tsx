import React from "react";
import TodoCount from "./Components/TodoCount/TodoCount";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoListItems from "./Components/TodoListItems/TodoListItems";

import "./App.css";

function App() {
  return (
    <div className="App">
      <strong>TODO APP</strong>
      <TodoCount />
      <TodoInput />
      <TodoListItems />
    </div>
  );
}

export default App;
