import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + 1 };
    case "decrement":
      return { firstCount: state.firstCount - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (event) => {
    dispatch({ type: event.target.value });
  };

  return (
    <>
      <div>Counter Two {count.firstCount}</div>
      <button onClick={clickHandler} value={"increment"}>
        Increment
      </button>
      <button onClick={clickHandler} value={"decrement"}>
        Decrement
      </button>
      <button onClick={clickHandler} value={"reset"}>
        Reset
      </button>
    </>
  );
}

export default CounterTwo;
