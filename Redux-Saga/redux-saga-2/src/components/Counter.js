import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return <div>Counter - {props.counter}</div>;
}

const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

export default connect(mapStateToProps, null)(Counter);
