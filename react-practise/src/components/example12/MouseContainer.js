import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  function clickHandler() {
    setDisplay((prevState) => !display);
  }

  return (
    <div>
      <button onClick={clickHandler}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
