import React from "react";

const PersonCard = (props) => {
  const { lastName, firstName, age, hair } = props;
  return (
    <div className="container">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hair}</p>
    </div>
  );
};

export default PersonCard;
