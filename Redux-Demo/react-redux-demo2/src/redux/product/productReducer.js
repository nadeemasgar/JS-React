import { BUY_PRODUCT } from "./actionsConstant";
import { RETURN_PRODUCT } from "./actionsConstant";
import { REVIEW_PRODUCT } from "./actionsConstant";

const initialState = {
  numOfProducts: 20,
  review: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      return { ...state, numOfProducts: state.numOfProducts - 1 };
    case RETURN_PRODUCT:
      return { ...state, numOfProducts: state.numOfProducts + 1 };
    case REVIEW_PRODUCT:
      return { ...state, review: action.payload };
    default:
      return state;
  }
};

export default productReducer;
