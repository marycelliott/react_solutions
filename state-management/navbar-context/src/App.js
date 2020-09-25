import React, { useState } from "react";
import Context from "./context/Context";
import "./App.css";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

function App() {
  const [name, setName] = useState("");
  <div>
    <Context.Provider value={{ name, setName }}>
      <Navbar />
      <FormWrapper />
    </Context.Provider>
  </div>;
}

export default App;
