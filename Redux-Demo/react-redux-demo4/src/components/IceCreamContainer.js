import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../Redux/iceCream/iceCreamAction";

function IceCreamContainer() {
  const [number, setNumber] = useState(0);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <span>CakeContainer - {numOfIceCream} </span>
      <input type="text" value={number} onChange={changeHandler} />
      <button onClick={() => dispatch(buyIceCream(number))}> Buy Cake</button>
    </div>
  );
}

export default IceCreamContainer;
