import React from "react";
import Home from "./components/Home";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Home path="/:word" />
        <Home path="/:word/:font/:bground" />
      </Router>
    </div>
  );
}

export default App;
