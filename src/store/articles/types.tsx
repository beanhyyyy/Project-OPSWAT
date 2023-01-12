import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from "./actionTypes";

export interface IArticles {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ArticlesState {
  isLoading: boolean;
  isSuccess: boolean;
  isFail: boolean;
  data: IArticles[];
  error: string | null;
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

export type ArticlesActions =
  | FetchArticlesRequest
  | FetchArticlesSuccess
  | FetchArticlesFailure;
