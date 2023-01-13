import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchArticlesFailure, fetchArticlesSuccess } from "./actions";
import { FETCH_ARTICLES_REQUEST } from "./actionTypes";
import { IArticles } from "./types";

const getArticless = () =>
  axios.get<IArticles[]>("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_ARTICLES_REQUEST action
*/
function* fetchArticlesSaga(): any {
  try {
    const response = yield call(getArticless);
    yield put(
      fetchArticlesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchArticlesFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ARTICLES_REQUEST` action.
  Allows concurrent increments.
*/
function* articlesSaga() {
  yield all([takeLatest(FETCH_ARTICLES_REQUEST, fetchArticlesSaga)]);
}

export default articlesSaga;
