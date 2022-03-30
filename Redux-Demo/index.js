const BUY_CAKE = "BUY_CAKE";

// actionCreator function -> It's a function that return an action
function actionCreator() {
  // action as an object with type property
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
