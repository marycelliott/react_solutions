import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Robinson"}
        firstName={"Joel"}
        age={53}
        hair={"dark brown"}
      />
      <PersonCard
        lastName={"Robot"}
        firstName={"Crow T."}
        age={31}
        hair={"none"}
      />
      <PersonCard lastName={"Servo"} firstName={"Tom"} age={31} hair={"none"} />
      <PersonCard
        lastName={"Frank"}
        firstName={"TV's"}
        age={55}
        hair={"white"}
      />
    </div>
  );
}

export default App;
