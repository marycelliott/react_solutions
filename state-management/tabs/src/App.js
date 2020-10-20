import React, { useState } from "react";
import logo from "./logo.svg";
import TabsContext from "./context/Context";
import Display from "./components/Display";
import Tab from "./components/Tab";

import "./App.css";

function App() {
  const [state, setState] = useState({
    tabs: [
      "content is showing here",
      "content is showing here",
      "content is showing here",
      "content is showing here",
      "content is showing here"
    ],
    active: null
  });
  return (
    <div className="container">
      <TabsContext.Provider value={{ state, setState }}>
        <Tab />
        <Display />
      </TabsContext.Provider>
    </div>
  );
}

export default App;
