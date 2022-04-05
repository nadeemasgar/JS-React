import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Redux/counter/counterActions";

function Counter(props) {
  return (
    <div>
      <div>Counter - {props.counter}</div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // state as parameter and return an object. Here, object contains state
  return {
    counter: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  // dispatch method as parameter and return an object. Here object contains dispatch method
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
