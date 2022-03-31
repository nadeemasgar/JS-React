import { BUY_PRODUCT } from "./actionsConstant";
import { RETURN_PRODUCT } from "./actionsConstant";
import { REVIEW_PRODUCT } from "./actionsConstant";

export const buyProduct = () => {
  return {
    type: BUY_PRODUCT,
  };
};

export const returnProduct = () => {
  return {
    type: RETURN_PRODUCT,
  };
};

export const reviewProduct = (review) => {
  return {
    type: REVIEW_PRODUCT,
    payload: review,
  };
};
