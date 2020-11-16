import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import ShowOne from "./views/ShowOne";
import Edit from "./views/Edit";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <Login path="/" />
      <Main path="/sharks" />
      <ShowOne path="/sharks/:shark_id" />
      <Edit path="/sharks/:shark_id/edit" />
    </Router>
  );

  //
}

export default App;
