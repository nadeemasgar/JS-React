import { BUY_CAKE } from "./cakeTypes";

// action creator is a function that return an object
export const buyCake = () => {
  return {
    //action is an object with type property
    type: BUY_CAKE,
  };
};
