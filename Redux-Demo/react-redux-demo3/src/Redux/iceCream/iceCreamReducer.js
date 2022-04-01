import {BUY_ICECREAM} from "./iceCreamConstant";

const iceCreamInitialState = {
  numOfIceCream: 50,
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

export default iceCreamReducer;
