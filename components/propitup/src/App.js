import React from "react";
import logo from "./logo.svg";
import PersonList from "./components/PersonList";

const list = [
  {
    key: 1,
    firstName: "Claire",
    lastName: "Elliott",
    age: 30,
    hairColor: "blond"
  },
  { key: 2, firstName: "Tom", lastName: "Servo", age: 30, hairColor: "bald" },
  {
    key: 3,
    firstName: "Crow T.",
    lastName: "Robot",
    age: 30,
    hairColor: "gold"
  },
  {
    key: 4,
    firstName: "Joel",
    lastName: "Robinson",
    age: 30,
    hairColor: "brown"
  }
];

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="text-6xl text-center">Prop It Up!</h1>
        <p className="text-center font-light">Featuring Tailwind CSS</p>
        <div className="w-full flex justify-center">
          <PersonList list={list} />
        </div>
      </div>
    </div>
  );
}

export { App, list };
