import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./index";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./saga/mySaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);
store.dispatch({ type: "HELLO" });
// store.dispatch({ type: "BYE" });

export default store;
