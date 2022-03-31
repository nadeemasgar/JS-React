import { createStore } from "redux";
import productReducer from "./product/productReducer";

const store = createStore(productReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
// unsubscribe();

export default store;
