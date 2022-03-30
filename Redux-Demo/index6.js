const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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
const initialCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIcecream: 50,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecream: state.numOfIcecream - 1 };
    default:
      return state;
  }
};

// Combine multiple reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Create Store & its Functionalities
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
