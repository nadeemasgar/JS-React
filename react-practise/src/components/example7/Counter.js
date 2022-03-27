import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + props.increment);
  };

  return (
    <>
      <div style={props.style}>{count}</div>
      <button onClick={updateCount}>Click</button>
    </>
  );
};

export default Counter;
