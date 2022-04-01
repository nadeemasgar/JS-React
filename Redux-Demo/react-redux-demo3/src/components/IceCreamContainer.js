import React from "react";
import { useSelector, useDispatch } from "react-redux";
import iceCreamAction from "../Redux/iceCream/iceCreamAction";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <div>IceCream Container - {numOfIceCream}</div>
      <button onClick={() => dispatch(iceCreamAction())}>Buy IceCream</button>
    </div>
  );
};

export default IceCreamContainer;
