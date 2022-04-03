import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeAction";

function CakeContainer() {
  const [number, setNumber] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <span>CakeContainer - {numOfCakes} </span>
      <input type="text" value={number} onChange={changeHandler} />
      <button onClick={() => dispatch(buyCake(number))}> Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
