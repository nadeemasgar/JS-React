import React, { useContext } from "react";
import { CounterContext } from "./Parent";

function ComponentF() {
  const ctx = useContext(CounterContext);

  return (
    <>
      <div>ComponentF {ctx.globalCount}</div>
      <button onClick={() => ctx.globalDispatch("increment")}>
        Increment in ComponentF
      </button>
      <button onClick={() => ctx.globalDispatch("decrement")}>
        Decrement in ComponentF
      </button>
      <button onClick={() => ctx.globalDispatch("reset")}>
        Reset in ComponentF
      </button>
    </>
  );
}

export default ComponentF;
