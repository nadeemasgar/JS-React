import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";
import { buyIceCream } from "../Redux/iceCream/iceCreamAction";

function ItemContainer(props) {
  return (
    <div>
      <span> Item - {props.item} </span>
      <button onClick={props.buyItem}>Buy Items </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
