import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, lastName, age, hair } = this.props;
    return (
      <div className="container">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hair}</p>
      </div>
    );
  }
}

export default PersonCard;
