import { INCREMENT, DECREMENT } from "./counterConstant";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { state: state + 1 };
    case DECREMENT:
      return { state: state - 1 };
    default:
      return state;
  }
};

export default reducer;
