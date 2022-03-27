import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const css = {
    "backgroundColor": props.color,
    width: "auto",
    
  };

  return (
    <>
      <div style={css}>{count}</div>
      <button onClick={updateCount}>Click</button>
    </>
  );
};

export default Counter;
