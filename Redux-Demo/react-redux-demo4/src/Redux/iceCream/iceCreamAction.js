import { BUY_ICECREAM } from "./iceCreamConstant";

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};
