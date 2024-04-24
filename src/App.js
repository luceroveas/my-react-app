import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Denver" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://main--fastidious-druid-af1a2f.netlify.app/"
            rel="noopener noreferrer"
          >
            {" "}
            Andrea Vea{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/luceroveas/my-react-app"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and
          <a
            href="https://stunning-blancmange-64e6f0.netlify.app/"
            rel="noopener noreferrer"
          >
            {""} hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
