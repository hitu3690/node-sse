import React from "react";
import { TodoContainer } from "./components/todo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todos" element={<TodoContainer />} />
      </Routes>
      <TodoContainer />
    </div>
  );
}

export default App;
