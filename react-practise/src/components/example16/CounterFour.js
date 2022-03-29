import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement1":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterFour() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>FirstCounter {count.firstCount}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
          FirstCounter Increment by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
          FirstCounter Decrement by 1
        </button>
        <button onClick={() => dispatch({ type: "increment1", value: 5 })}>
          FirstCounter Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 5 })}>
          FirstCounter Decrement by 5
        </button>
      </div>

      <div> FirstCounter {count.secondCount}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          SecondCounter Increment by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          SecondCounter Decrement by 1
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          SecondCounter Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          SecondCounter Decrement by 5
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default CounterFour;
