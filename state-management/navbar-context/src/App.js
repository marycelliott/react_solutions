import React, { useState, useEffect } from "react";
import Context from "./context/Context";
import "./App.css";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

function App() {
  const [poke, setPoke] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/raichu")
      .then(response => {
        return response.json();
      })
      .then(response => {
        setPoke(response);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return <div className="App">{poke ? <h1>{poke.name}</h1> : null}</div>;
}

export default App;
