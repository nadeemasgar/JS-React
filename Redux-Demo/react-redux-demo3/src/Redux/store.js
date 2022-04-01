import { createStore } from "redux"; // **
import { combineReducers } from "redux"; // **
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State", store.getState());
store.subscribe(() => console.log("Updated State", store.getState()));

export default store;
