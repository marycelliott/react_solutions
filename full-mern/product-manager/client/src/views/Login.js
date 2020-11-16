import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Login = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      navigate("/sharks");
    }
  }, []);

  const createUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users", { username: username })
      .then((res) => {
        localStorage.setItem("user_id", res.data._id);
        navigate("/sharks");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={createUser}>
      <input
        className="form-control-sm w-50"
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
