import { BUY_CAKE } from "./cakeConstant";

const cakeInitialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    default:
      return state;
  }
};

export default cakeReducer;
