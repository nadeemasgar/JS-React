import { takeEvery, take, call, put } from "redux-saga/effects";
import axios from "axios";

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

function* fetchUsers() {
  yield put({ type: "FETCH_USERS_REQUEST" });
  console.log("Inside fetchUsers");

  try {
    const response = yield call(getUsers);
    const users = response.data;
    console.log(users);
    yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
  } catch (error) {
    console.log(error.message);
    yield put({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }

  // axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     const users = response.data;
  //     console.log(users);
  //     // yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     // yield put({ type: "FETCH_USERS_FAILURE", payload: error.message });
  //   });
}

// watcherSaga or observer
export function* watcherSaga() {
  console.log("Saga Running");

  yield take("FETCH");
  yield call(fetchUsers);

  // yield takeEvery("FETCH", fetchUsers);
}
