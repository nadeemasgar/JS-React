import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

function CakeContainer2(props) {
  const [number, setNumber] = useState(0);

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <span>CakeContainer2 - {props.numOfCakes} </span>
      <input type="text" value={number} onChange={changeHandler} />
      <button onClick={() => props.buyCake(number)}> Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer2);
