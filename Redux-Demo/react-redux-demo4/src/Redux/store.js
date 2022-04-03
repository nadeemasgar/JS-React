import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./index";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
