import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import NewForm from "../components/NewForm";
import ShowAll from "../components/ShowAll";

const Main = (props) => {
  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <NewForm />
        </div>
        <div className="col">
          <ShowAll />
        </div>
      </div>
    </div>
  );
};

export default Main;
