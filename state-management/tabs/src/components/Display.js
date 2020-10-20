import React, { useContext } from "react";
import TabsContext from "../context/Context";

const Display = () => {
  // context includes: state (tabs,active), setState
  const context = useContext(TabsContext);
  const { tabs, active } = context.state;
  return (
    <div className="container">
      {active != null ? (
        <div>
          Tabs {active + 1} {tabs[active]}
        </div>
      ) : null}
    </div>
  );
};
export default Display;
