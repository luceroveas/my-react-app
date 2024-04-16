import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        This project was coded by{" "}
        <a href="https://main--fastidious-druid-af1a2f.netlify.app/">
          {" "}
          Andrea Vea{" "}
        </a>{" "}
        and is{" "}
        <a href="https://github.com/luceroveas/my-react-app">
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
