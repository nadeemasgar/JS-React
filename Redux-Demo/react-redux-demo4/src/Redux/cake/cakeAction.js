import { BUY_CAKE } from "./cakeConstant";

export const buyCake = (number) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
