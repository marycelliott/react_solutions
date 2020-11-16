import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ShowOne = (props) => {
  const [shark, setShark] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sharks/" + props.shark_id)
      .then((res) => setShark(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteShark = () => {
    axios
      .delete("http://localhost:8000/api/sharks/" + props.shark_id)
      .then((res) => navigate("/sharks"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="card mt-4" style={{ width: "24rem" }}>
        <img src={shark.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{shark.species}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Location:</b> {shark.location}
            </li>
            <li className="list-group-item">
              <b>Ferocity:</b> {shark.ferocity}
            </li>
          </ul>
          <Link to={"/sharks"}>
            <button className="m-1 btn btn-sm btn-secondary">Go Back</button>
          </Link>
          <Link to={"/sharks/" + shark._id + "/edit"}>
            <button className="m-1 btn btn-sm btn-primary">Edit</button>
          </Link>
          <button className="m-1 btn btn-sm btn-danger" onClick={deleteShark}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowOne;
