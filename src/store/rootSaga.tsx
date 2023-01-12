import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";
import articlesSaga from "./articles/sagas";

export function* rootSaga() {
  yield all([fork(todoSaga), fork(articlesSaga)]);
}
