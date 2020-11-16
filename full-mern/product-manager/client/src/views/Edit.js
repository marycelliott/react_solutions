import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const [shark, setShark] = useState({});
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [ferocity, setFerocity] = useState(1);
  const [errs, setErrs] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sharks/" + props.shark_id)
      .then((res) => {
        setShark(res.data);
        setSpecies(res.data.species);
        setLocation(res.data.location);
        setUrl(res.data.url);
        setFerocity(res.data.ferocity);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateShark = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/sharks/" + props.shark_id, {
        species,
        location,
        url,
        ferocity,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrs(res.data.errors);
          setSpecies(shark.species);
          setLocation(shark.location);
          setUrl(shark.url);
          setFerocity(shark.ferocity);
        } else {
          navigate("/sharks/" + res.data._id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container w-50">
      <h2 className="mt-4">Add a New Shark</h2>
      <form onSubmit={updateShark}>
        <div className="form-group">
          <label className="mr-2">Species</label>
          {errs.species ? (
            <span className="small text-danger">{errs.species.message}</span>
          ) : null}
          <input
            className="form-control form-control-sm"
            name="species"
            type="text"
            value={species}
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
            value={location}
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
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="mr-2">Ferocity</label>
          {errs.ferocity ? (
            <span className="small text-danger">{errs.ferocity.message}</span>
          ) : null}
          <select
            className="form-control form-control-sm"
            name="ferocity"
            value={ferocity}
            onChange={(e) => setFerocity(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="btn btn-lg btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Edit;
