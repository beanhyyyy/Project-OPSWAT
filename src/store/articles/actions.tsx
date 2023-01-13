import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_RESET,
  FETCH_CREATE_ARTICLES_REQUEST,
  FETCH_CREATE_ARTICLES_FAILURE,
  FETCH_CREATE_ARTICLES_SUCCESS,
  FETCH_CREATE_ARTICLES_RESET,
  FETCH_EDIT_ARTICLES_REQUEST,
  FETCH_EDIT_ARTICLES_FAILURE,
  FETCH_EDIT_ARTICLES_SUCCESS,
  FETCH_EDIT_ARTICLES_RESET,
} from "./actionTypes";
import {
  FetchArticlesRequest,
  FetchArticlesSuccess,
  FetchArticlesSuccessPayload,
  FetchArticlesFailure,
  FetchArticlesFailurePayload,
  FetchArticlesReset,
  FetchCreateArticlesRequest,
  FetchCreateArticlesSuccess,
  FetchCreateArticlesSuccessPayload,
  FetchCreateArticlesFailure,
  FetchCreateArticlesFailurePayload,
  FetchCreateArticlesReset,
  IArticles,
  FetchEditArticlesRequest,
  FetchEditArticlesSuccess,
  FetchEditArticlesSuccessPayload,
  FetchEditArticlesFailure,
  FetchEditArticlesFailurePayload,
  FetchEditArticlesReset,
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

export const fetchArticlesReset = (): FetchArticlesReset => ({
  type: FETCH_ARTICLES_RESET,
});

// CREATE
export const fetchCreateArticlesRequest = (
  params: IArticles
): FetchCreateArticlesRequest => ({
  type: FETCH_CREATE_ARTICLES_REQUEST,
  params,
});

export const fetchCreateArticlesSuccess = (
  payload: FetchCreateArticlesSuccessPayload
): FetchCreateArticlesSuccess => ({
  type: FETCH_CREATE_ARTICLES_SUCCESS,
  payload,
});

export const fetchCreateArticlesFailure = (
  payload: FetchCreateArticlesFailurePayload
): FetchCreateArticlesFailure => ({
  type: FETCH_CREATE_ARTICLES_FAILURE,
  payload,
});

export const fetchCreateArticlesReset = (): FetchCreateArticlesReset => ({
  type: FETCH_CREATE_ARTICLES_RESET,
});

// EDIT
export const fetchEditArticlesRequest = (
  params: IArticles
): FetchEditArticlesRequest => ({
  type: FETCH_EDIT_ARTICLES_REQUEST,
  params,
});

export const fetchEditArticlesSuccess = (
  payload: FetchEditArticlesSuccessPayload
): FetchEditArticlesSuccess => ({
  type: FETCH_EDIT_ARTICLES_SUCCESS,
  payload,
});

export const fetchEditArticlesFailure = (
  payload: FetchEditArticlesFailurePayload
): FetchEditArticlesFailure => ({
  type: FETCH_EDIT_ARTICLES_FAILURE,
  payload,
});

export const fetchEditArticlesReset = (): FetchEditArticlesReset => ({
  type: FETCH_EDIT_ARTICLES_RESET,
});
