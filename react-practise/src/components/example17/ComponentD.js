import React, { useContext } from "react";
import { CounterContext } from "./Parent";

function ComponentD() {
  const ctx = useContext(CounterContext);

  return (
    <>
      <div>ComponentD {ctx.globalCount}</div>
      <button onClick={() => ctx.globalDispatch("increment")}>
        Increment in ComponentD
      </button>
      <button onClick={() => ctx.globalDispatch("decrement")}>
        Decrement in ComponentD
      </button>
      <button onClick={() => ctx.globalDispatch("reset")}>
        Reset in ComponentD
      </button>
    </>
  );
}

export default ComponentD;
