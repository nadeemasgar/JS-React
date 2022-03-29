import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (event) => {
    dispatch(event.target.value);
  };

  return (
    <>
      <div>Counter One {count}</div>
      <button onClick={clickHandler} value="increment">
        Increment
      </button>
      <button onClick={clickHandler} value="decrement">
        Decrement
      </button>
      <button onClick={clickHandler} value="reset">
        Reset
      </button>
    </>
  );
}

export default CounterOne;
