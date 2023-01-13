import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../contants";

import { fetchRegisterFailure, fetchRegisterSuccess } from "./actions";
import { FETCH_REGISTER_REQUEST } from "./actionTypes";
import { IRegister, FetchRegisterRequest } from "./types";




/*
  Worker Saga: Fired on FETCH_REGISTER_REQUEST action
*/
function* fetchRegisterSaga(action : FetchRegisterRequest): any {
  try {

    const postRegisters = () =>
      axios.post<IRegister[]>(`${API}/api/users`, action.params);

    const response = yield call(postRegisters);
    
    yield put(
      fetchRegisterSuccess({
        data: response.user,
      })
    );
  } catch (e: any) {
    yield put(
      fetchRegisterFailure({
        error: e.response.data.errors.username || e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_REGISTER_REQUEST` action.
  Allows concurrent increments.
*/
function* registerSaga() {
  yield all([takeLatest(FETCH_REGISTER_REQUEST, fetchRegisterSaga)]);
}

export default registerSaga;
