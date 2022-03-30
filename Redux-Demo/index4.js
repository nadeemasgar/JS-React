const redux = require("redux");
const createStore = redux.createStore;

// create actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Create initialState & Multiple Reducers
const initialState = {
  numOfCake: 10,
  numOfIcecream: 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    case BUY_ICECREAM:
      return { ...state, numOfIcecream: state.numOfIcecream - 1 };
    default:
      return state;
  }
};

// Create Store & its Functionalities
const store = createStore(reducer);
console.log("Initial state ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
