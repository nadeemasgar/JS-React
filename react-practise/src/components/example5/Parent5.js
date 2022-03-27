import React from "react";
import ReactDOM from "react-dom";

import Child5 from "./Child5";

function Parent5() {
  return ReactDOM.createPortal(
    <Child5 />,
    document.getElementById("reactPortal")
  );
}

export default Parent5;
