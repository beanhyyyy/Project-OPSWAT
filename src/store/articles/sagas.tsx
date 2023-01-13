import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  fetchArticlesFailure,
  fetchArticlesSuccess,
  fetchCreateArticlesFailure,
  fetchCreateArticlesSuccess,
  fetchEditArticlesFailure,
  fetchEditArticlesSuccess,
} from "./actions";
import {
  FETCH_ARTICLES_REQUEST,
  FETCH_CREATE_ARTICLES_REQUEST,
  FETCH_EDIT_ARTICLES_REQUEST,
} from "./actionTypes";
import {
  FetchCreateArticlesRequest,
  FetchEditArticlesRequest,
  IArticles,
} from "./types";

import { API } from "../../contants";

/*
  Worker Saga: Fired on FETCH_ARTICLES_REQUEST action
*/
function* fetchArticlesSaga(): any {
  try {
    const getArticless = () => axios.get<IArticles[]>(`${API}/api/articles`);

    const response = yield call(getArticless);
    yield put(
      fetchArticlesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchArticlesFailure({
        error: e.response.data.errors.username || e.message,
      })
    );
  }
}

/*
  Worker Saga: CREATE
*/
function* fetchCreateArticlesSaga(action: FetchCreateArticlesRequest): any {
  try {
    const postLogins = () =>
      axios.post<IArticles[]>(`${API}/api/articles`, action.params);

    const response = yield call(postLogins);

    yield put(
      fetchCreateArticlesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchCreateArticlesFailure({
        error: e.response.data.message || e.message,
      })
    );
  }
}

/*
  Worker Saga: EDIT
*/
function* fetchEditArticlesSaga(action: FetchEditArticlesRequest): any {
  try {
    const postLogins = () =>
      axios.put<IArticles[]>(
        `${API}/api/articles/${action.params.id}`,
        action.params
      );

    const response = yield call(postLogins);

    yield put(
      fetchEditArticlesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchEditArticlesFailure({
        error: e.response.data.message || e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ARTICLES_REQUEST` action.
  Allows concurrent increments.
*/
function* articlesSaga() {
  yield all([
    takeLatest(FETCH_ARTICLES_REQUEST, fetchArticlesSaga),
    takeLatest(FETCH_CREATE_ARTICLES_REQUEST, fetchCreateArticlesSaga),
    takeLatest(FETCH_EDIT_ARTICLES_REQUEST, fetchEditArticlesSaga),
  ]);
}

export default articlesSaga;
