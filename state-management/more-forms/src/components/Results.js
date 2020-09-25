import React from "react";
// short hand of const { firstName, lastName, email, password, confPassword } = props;
const Results = ({ state }) => {
  return (
    <div>
      <h1>Results</h1>
      {Object.keys(state).map((key) => (
        <p>{state[key]}</p>
      ))}
    </div>
  );
};

export default Results;
