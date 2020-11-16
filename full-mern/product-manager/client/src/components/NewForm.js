import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewForm = (props) => {
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [ferocity, setFerocity] = useState(1);
  const [errs, setErrs] = useState({});

  const createShark = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/sharks", {
        species,
        location,
        url,
        ferocity,
        userId: localStorage.getItem("user_id"),
      })
      .then((res) => {
        if (res.data.errors) {
          setErrs(res.data.errors);
        } else {
          navigate("/sharks/" + res.data._id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Add a New Shark</h2>
      <form onSubmit={createShark}>
        <div className="form-group">
          <label className="mr-2">Species</label>
          {errs.species ? (
            <span className="small text-danger">{errs.species.message}</span>
          ) : null}
          <input
            className="form-control form-control-sm"
            name="species"
            type="text"
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="mr-2">Location</label>
          {errs.location ? (
            <span className="small text-danger">{errs.location.message}</span>
          ) : null}
          <input
            className="form-control form-control-sm"
            name="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="mr-2">Image URL</label>
          {errs.url ? (
            <span className="small text-danger">{errs.url.message}</span>
          ) : null}
          <input
            className="form-control form-control-sm"
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="mr-2">Ferocity</label>
          {errs.ferocity ? (
            <span className="small text-danger">{errs.species.message}</span>
          ) : null}
          <select
            className="form-control form-control-sm"
            name="ferocity"
            onChange={(e) => setFerocity(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="btn btn-info btn-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewForm;
