import React from "react";

const Result = ({ result }) => {
  if (result) {
    return (
      <div className="container left-align" style={{ marginTop: "1em" }}>
        <h2>{result.name}</h2>
        {Object.keys(result).map((item) =>
          item !== "name" ? (
            <div>
              <span>{item}</span>{" "}
              <h5
                className="purple-text text-darken-2"
                style={{ display: "inline-block", marginLeft: "1em" }}
              >
                {result[item]}
              </h5>
            </div>
          ) : null
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Result;
