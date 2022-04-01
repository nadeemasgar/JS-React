import {BUY_CAKE} from "./cakeConstant";

const cakeInitialState = {
  numOfCakes: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

export default cakeReducer;
