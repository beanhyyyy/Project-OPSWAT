import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_RESET,
  FETCH_CREATE_ARTICLES_REQUEST,
  FETCH_CREATE_ARTICLES_FAILURE,
  FETCH_CREATE_ARTICLES_SUCCESS,
  FETCH_CREATE_ARTICLES_RESET,
  FETCH_EDIT_ARTICLES_REQUEST,
  FETCH_EDIT_ARTICLES_FAILURE,
  FETCH_EDIT_ARTICLES_SUCCESS,
  FETCH_EDIT_ARTICLES_RESET,
  FETCH_DELETE_ARTICLES_REQUEST,
  FETCH_DELETE_ARTICLES_FAILURE,
  FETCH_DELETE_ARTICLES_SUCCESS,
  FETCH_DELETE_ARTICLES_RESET,
} from "./actionTypes";

export interface IAuthor {
  bio: string;
  email: string;
  id: number;
  image: string;
  username: string;
}

export interface IArticles {
  body?: string;
  created?: number;
  description?: string;
  favoriteCount?: number;
  id?: number;
  slug?: string;
  title?: string;
  tagList?: any;
  updated?: number;
}

export interface ArticlesState {
  isLoading: boolean;
  isSuccess: boolean;
  isFail: boolean;
  data: IArticles[];
  error: string | null;
  isPostLoading: boolean;
  isPostSuccess: boolean;
  isPostFail: boolean;
  errorPost: string | null;
  isDeleteLoading: boolean;
  isDeleteFail: boolean;
  isDeleteSuccess: boolean;
  errorDelete: string | null;
}

export interface FetchArticlesSuccessPayload {
  data: IArticles[];
}

export interface FetchArticlesFailurePayload {
  error: string;
}

export interface FetchArticlesRequest {
  type: typeof FETCH_ARTICLES_REQUEST;
}

export type FetchArticlesSuccess = {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: FetchArticlesSuccessPayload;
};

export type FetchArticlesFailure = {
  type: typeof FETCH_ARTICLES_FAILURE;
  payload: FetchArticlesFailurePayload;
};

export type FetchArticlesReset = {
  type: typeof FETCH_ARTICLES_RESET;
};

// CREATE
export interface FetchCreateArticlesSuccessPayload {
  data: IArticles;
}

export interface FetchCreateArticlesFailurePayload {
  error: string;
}

export interface FetchCreateArticlesRequest {
  type: typeof FETCH_CREATE_ARTICLES_REQUEST;
  params: IArticles;
}

export type FetchCreateArticlesSuccess = {
  type: typeof FETCH_CREATE_ARTICLES_SUCCESS;
  payload: FetchCreateArticlesSuccessPayload;
};

export type FetchCreateArticlesFailure = {
  type: typeof FETCH_CREATE_ARTICLES_FAILURE;
  payload: FetchCreateArticlesFailurePayload;
};

export type FetchCreateArticlesReset = {
  type: typeof FETCH_CREATE_ARTICLES_RESET;
};

// EDIT
export interface FetchEditArticlesSuccessPayload {
  data: IArticles;
}

export interface FetchEditArticlesFailurePayload {
  error: string;
}

export interface FetchEditArticlesRequest {
  type: typeof FETCH_EDIT_ARTICLES_REQUEST;
  params: IArticles;
}

export type FetchEditArticlesSuccess = {
  type: typeof FETCH_EDIT_ARTICLES_SUCCESS;
  payload: FetchEditArticlesSuccessPayload;
};

export type FetchEditArticlesFailure = {
  type: typeof FETCH_EDIT_ARTICLES_FAILURE;
  payload: FetchEditArticlesFailurePayload;
};

export type FetchEditArticlesReset = {
  type: typeof FETCH_EDIT_ARTICLES_RESET;
};

// DELETE
export interface FetchDeleteArticlesSuccessPayload {
  data: IArticles;
}

export interface FetchDeleteArticlesFailurePayload {
  error: string;
}

export interface FetchDeleteArticlesRequest {
  type: typeof FETCH_DELETE_ARTICLES_REQUEST;
  params: IArticles;
}

export type FetchDeleteArticlesSuccess = {
  type: typeof FETCH_DELETE_ARTICLES_SUCCESS;
  payload: FetchDeleteArticlesSuccessPayload;
};

export type FetchDeleteArticlesFailure = {
  type: typeof FETCH_DELETE_ARTICLES_FAILURE;
  payload: FetchDeleteArticlesFailurePayload;
};

export type FetchDeleteArticlesReset = {
  type: typeof FETCH_DELETE_ARTICLES_RESET;
};

export type ArticlesActions =
  | FetchArticlesRequest
  | FetchArticlesSuccess
  | FetchArticlesFailure
  | FetchArticlesReset
  | FetchCreateArticlesRequest
  | FetchCreateArticlesSuccess
  | FetchCreateArticlesFailure
  | FetchCreateArticlesReset
  | FetchEditArticlesRequest
  | FetchEditArticlesSuccess
  | FetchEditArticlesFailure
  | FetchEditArticlesReset
  | FetchDeleteArticlesRequest
  | FetchDeleteArticlesSuccess
  | FetchDeleteArticlesFailure
  | FetchDeleteArticlesReset;
