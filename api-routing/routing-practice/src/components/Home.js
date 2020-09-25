import React from "react";

const Home = (props) => {
  console.log(props);
  if (!props.word) {
    return (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  } else {
    if (isNaN(props.word)) {
      return (
        <div>
          <h1
            style={
              props.font
                ? { color: props.font, backgroundColor: props.bground }
                : null
            }
          >
            The word is: {props.word}
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>The number is: {props.word}</h1>
        </div>
      );
    }
  }
};

export default Home;
