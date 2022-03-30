const BUY_CAKE = "BUY_CAKE";

// actionCreator function -> It's a function that return an action
function buyCake() {
  // action as an object with type property
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};
