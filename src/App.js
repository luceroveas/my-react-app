import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <small>
          <a href="https://github.com/luceroveas/my-react-app">
            {" "}
            Open-source code{" "}
          </a>
          , by Andrea Vea from <a href="https://www.shecodes.io/">She Codes </a>
        </small>
      </header>
    </div>
  );
}

export default App;
