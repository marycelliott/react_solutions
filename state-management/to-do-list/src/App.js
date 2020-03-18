import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import Form from "./components/Form";

function App() {
  const [item, setItem] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {item.map((task, i) => (
            <Item task={task} key={i} setItem={setItem} item={item} index={i} />
          ))}
        </div>
        <Form setItem={setItem} />
      </div>
    </div>
  );
}

export default App;
