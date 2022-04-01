import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cakeActions from "../Redux/cake/cakeActions";

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Cake Container - {numOfCakes}</div>
      <button onClick={() => dispatch(cakeActions())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
