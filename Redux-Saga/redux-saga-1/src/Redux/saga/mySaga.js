import { takeEvery } from "redux-saga/effects";

function* bye() {
  console.log("Bye");
}

function* workerSaga() {
  console.log("Hello displayed");
  yield takeEvery("BYE", bye);
}


// watcherSaga or observer 
export function* watcherSaga() {
  console.log("mySaga");
  yield takeEvery("HELLO", workerSaga);
}
 