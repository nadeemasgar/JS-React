import React, { useContext } from "react";
import { CounterContext } from "./Parent";

function ComponentA() {
  const ctx = useContext(CounterContext);

  return (
    <>
      <div>ComponentA {ctx.globalCount}</div>
      <button onClick={() => ctx.globalDispatch("increment")}>
        Increment in ComponentA 
      </button>
      <button onClick={() => ctx.globalDispatch("decrement")}>
        Decrement in ComponentA
      </button>
      <button onClick={() => ctx.globalDispatch("reset")}>
        Reset in ComponentA
      </button>
    </>
  );
}

export default ComponentA;
