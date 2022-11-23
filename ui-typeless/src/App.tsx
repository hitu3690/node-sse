import React from "react";
import { TodoContainer } from "./components/todo";
import { Route, Routes } from "react-router-dom";
import { ProjectsIndex } from "./projects/projectsIndex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todos" element={<TodoContainer />} />
        <Route path="/projects" element={<ProjectsIndex />} />
      </Routes>
      <TodoContainer />
    </div>
  );
}

export default App;
