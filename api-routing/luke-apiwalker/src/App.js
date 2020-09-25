import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import NotFound from "./components/NotFound";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <Navbar setResult={setResult} />
      <Router>
        <Result path="/:id" result={result} />
        <NotFound path="/obiwan" />
      </Router>
    </div>
  );
}

export default App;
