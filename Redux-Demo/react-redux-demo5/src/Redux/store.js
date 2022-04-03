import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./users/UsersReducers";

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
