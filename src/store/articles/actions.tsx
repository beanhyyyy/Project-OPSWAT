import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
} from "./actionTypes";
import {
  FetchArticlesRequest,
  FetchArticlesSuccess,
  FetchArticlesSuccessPayload,
  FetchArticlesFailure,
  FetchArticlesFailurePayload,
} from "./types";

export const fetchArticlesRequest = (): FetchArticlesRequest => ({
  type: FETCH_ARTICLES_REQUEST,
});

export const fetchArticlesSuccess = (
  payload: FetchArticlesSuccessPayload
): FetchArticlesSuccess => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload,
});

export const fetchArticlesFailure = (
  payload: FetchArticlesFailurePayload
): FetchArticlesFailure => ({
  type: FETCH_ARTICLES_FAILURE,
  payload,
});
