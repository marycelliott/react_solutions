import React, { useContext } from "react";
import TabsContext from "../context/Context";

const Tab = () => {
  const context = useContext(TabsContext);
  console.log(context);

  const onClick = (e, i) => {
    let buttons = document.getElementsByClassName("btn btn-light");
    for (let button of buttons) {
      console.log(button);
      button.style.backgroundColor = "white";
    }
    context.setState({
      ...context.state,
      active: i
    });
    console.log(e.target);
    e.target.style.backgroundColor = "blue";
    // set "active" to the index position
  };

  return (
    <div className="container">
      {context.state.tabs.map((item, i) => (
        <button onClick={e => onClick(e, i)} className="btn btn-light">
          Tab {i + 1}{" "}
        </button>
      ))}
    </div>
  );
};
export default Tab;
