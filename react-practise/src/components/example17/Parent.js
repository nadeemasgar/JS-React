import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CounterContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function Parent() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Parent {count}</div>
      <button onClick={() => dispatch("increment")}>Increment in Parent</button>
      <button onClick={() => dispatch("decrement")}>Decrement in Parent</button>
      <button onClick={() => dispatch("reset")}>Reset in Parent</button>
      <CounterContext.Provider
        value={{ globalCount: count, globalDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </>
  );
}

export default Parent;
