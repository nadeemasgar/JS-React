import { takeEvery, delay, put, takeLatest } from "redux-saga/effects";

function* workerSaga() {
  console.log("INCREMENT_ASYNC");
  yield delay(2000);
  yield put({ type: "INCREMENT_ASYNC" });
}

export function* watcherSaga() {
  console.log("Saga running");
  yield takeEvery("INCREMENT", workerSaga);
}
