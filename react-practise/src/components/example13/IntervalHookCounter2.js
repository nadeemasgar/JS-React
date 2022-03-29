import React, { useState, useEffect } from "react";

const IntervalHookCounter2 = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log(count);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default IntervalHookCounter2;
