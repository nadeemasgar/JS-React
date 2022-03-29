import React, { useState, useEffect } from "react";

const IntervalHookCounter3 = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log(count);
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
};

export default IntervalHookCounter3;
