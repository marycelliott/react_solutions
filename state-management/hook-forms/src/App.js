import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  return (
    <div className="App">
      <div>
        <h1>Hook Form</h1>
        <Form state={state} setState={setState} />
        <Results state={state} />
      </div>
    </div>
  );
};

export default App;
