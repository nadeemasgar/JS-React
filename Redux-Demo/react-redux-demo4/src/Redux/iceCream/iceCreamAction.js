import { BUY_ICECREAM } from "./iceCreamConstant";

export const buyIceCream = (number) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};
