import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ShowAll = (props) => {
  const [sharks, setSharks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sharks")
      .then((res) => setSharks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteShark = (shark_id) => {
    axios
      .delete("http://localhost:8000/api/sharks" + shark_id)
      .then((res) => {
        setSharks(sharks.filter((shark) => shark._id != shark_id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>All Sharks</h2>
      <ul className="list-group list-group-flush">
        {sharks.map((shark) => (
          <li className="list-group-item">
            <Link to={"/sharks/" + shark._id}>{shark.species}</Link>{" "}
            <button
              className="btn btn-danger ml-2 btn-sm"
              onClick={() => deleteShark(shark._id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAll;
