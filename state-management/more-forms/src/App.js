import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  // you can collect all fields in one piece of state
  // or split out each field into its own state
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  return (
    <div className="container">
      <h1 className="display-4">Hook Form</h1>
      <div className="row">
        <div className="col-6">
          <Form state={state} setState={setState} />
        </div>
        <div className="col-6">
          <Results state={state} />
        </div>
      </div>
    </div>
  );
};

export default App;
