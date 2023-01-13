import { all, fork } from "redux-saga/effects";

import todoSaga from "./todo/sagas";
import articlesSaga from "./articles/sagas";
import registerSaga from "./register/sagas";
import loginSaga from "./login/sagas";

export function* rootSaga() {
  yield all([
    fork(todoSaga),
    fork(articlesSaga),
    fork(registerSaga),
    fork(loginSaga),
  ]);
}
