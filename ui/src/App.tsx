import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { TodoContainer } from "./components/todo";

function App() {
  const eventSource = new EventSource("http://localhost:4000/events");

  useEffect(() => {
    eventSource.onmessage = (e) => {
      console.log({ e });
      console.log(JSON.parse(e.data));
    };
  }, [eventSource]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
