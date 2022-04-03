import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux/iceCream/iceCreamAction";

function IceCreamContainer2(props) {
  const [number, setNumber] = useState(0);

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <span>IceCreamContainer2 - {props.numOfIceCream} </span>
      <input type="text" value={number} onChange={changeHandler} />
      <button onClick={() => props.buyIceCream(number)}> Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer2);
