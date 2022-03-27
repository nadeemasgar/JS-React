import React, { useState } from "react";
import HOC from "./HOC";

let color;

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + props.increment);
  };

  color = props.color;

  return (
    <>
      <div style={props.style}>{count}</div>
      <button onClick={updateCount}>Click</button>
    </>
  );
};

export default HOC(Counter, color);
