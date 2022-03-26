import React, { useState } from "react";
import StateDemo from "./StateDemo";

const Parent = () => {
  const [isFlag, setFlag] = useState(true);
  let val;

  if (isFlag) {
    val = "Nadeem";
  } else {
    val = "Asgar";
  }

  const changeVal = () => {
    setFlag(() => {
      return !isFlag;
    });
  };

  return (
    <>
      <StateDemo val={val} />
      <button onClick={changeVal}>Click</button>
    </>
  );
};

export default Parent;
