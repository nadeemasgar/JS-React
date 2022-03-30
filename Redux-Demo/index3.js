const redux = require("redux");
const createStore = redux.createStore;

// => action is defined
const BUY_PRODUCT = "BUY_PRODUCT";
const RETURN_PRODUCT = "RETURN_PRODUCT";
const REVIEW_PRODUCT = "REVIEW_PRODUCT";

function buyProduct() {
  return {
    type: BUY_PRODUCT,
    product: "iPhone",
  };
}

function returnProduct() {
  return {
    type: RETURN_PRODUCT,
  };
}

function reviewProduct() {
  return {
    type: REVIEW_PRODUCT,
    payload: "Cost is too high",
  };
}

// => reducer() & initialState
const initialState = {
  noOfPhones: 10,
  review: "Good",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      return { ...state, noOfPhones: state.noOfPhones - 1 };
    case RETURN_PRODUCT:
      return { ...state, noOfPhones: state.noOfPhones + 1 };
    case REVIEW_PRODUCT:
      return { ...state, review: action.payload };
    default:
      return state;
  }
};

// => store functionality
// 1
const store = createStore(reducer);
// 2
console.log("Initial State ", store.getState());
// 3
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});
// 4
store.dispatch(buyProduct());
store.dispatch(returnProduct());
store.dispatch(reviewProduct());
// 5
unsubscribe();
