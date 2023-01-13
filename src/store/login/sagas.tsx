import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../contants";

import { fetchLoginFailure, fetchLoginSuccess } from "./actions";
import { FETCH_LOGIN_REQUEST } from "./actionTypes";
import { ILogin, FetchLoginRequest } from "./types";

/*
  Worker Saga: Fired on FETCH_LOGIN_REQUEST action
*/
function* fetchLoginSaga(action: FetchLoginRequest): any {
  try {
    const postLogins = () =>
      axios.post<ILogin[]>(`${API}/api/login`, action.params);

    const response = yield call(postLogins);

    yield put(
      fetchLoginSuccess({
        data: response.user,
      })
    );
  } catch (e: any) {
    yield put(
      fetchLoginFailure({
        error: e.response.data.errors.username || e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_LOGIN_REQUEST` action.
  Allows concurrent increments.
*/
function* loginSaga() {
  yield all([takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
