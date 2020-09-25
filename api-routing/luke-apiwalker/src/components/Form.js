import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = ({ setResult }) => {
  const [type, setType] = useState("");
  const [id, setId] = useState("");

  const findResult = (e) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/${type}/${id}`)
      .then((data) => {
        console.log(data);
        setResult(data["data"]);
        navigate(`/${id}`);
      })
      .catch((err) => {
        navigate("/obiwan");
      });
  };
  return (
    <form id="swapiForm" onSubmit={findResult}>
      <div className="row">
        <div className="input-field col  m4">
          <span>Search For:</span>
          <select
            onChange={(e) => setType(e.target.value)}
            className="browser-default white"
            name="type"
            style={{
              marginTop: ".5em",
              marginLeft: "1em",
              width: "60%",
              display: "inline-block",
            }}
          >
            <option value="" disabled selected>
              Select...
            </option>
            <option value="films">Films</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
        <div className="input-field col m3">
          <span>with ID:</span>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            name="ref_num"
            className="validate white darken-1"
            style={{ borderRadius: "4px", marginLeft: "1em", width: "50%" }}
          />
        </div>
        <button
          type="submit"
          className="col m btn grey inline"
          style={{ marginTop: "1em" }}
        >
          <span>Search</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
