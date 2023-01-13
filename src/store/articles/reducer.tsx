/* eslint-disable import/no-anonymous-default-export */
import produce from "immer";
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

import { ArticlesActions, ArticlesState } from "./types";

export const initialState: ArticlesState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFail: false,
  error: null,
  isPostLoading: false,
  isPostSuccess: false,
  isPostFail: false,
  errorPost: null,
  isDeleteLoading: false,
  isDeleteFail: false,
  isDeleteSuccess: false,
  errorDelete: null,
};

const articlesReducer = (state = initialState, action: ArticlesActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ARTICLES_REQUEST:
        draft.isLoading = true;
        draft.error = null;
        draft.isSuccess = false;
        draft.isFail = false;
        break;
      case FETCH_ARTICLES_SUCCESS:
        draft.isSuccess = true;
        draft.isLoading = false;
        draft.data = action.payload.data;
        break;
      case FETCH_ARTICLES_FAILURE:
        draft.isLoading = false;
        draft.isFail = true;
        draft.error = action.payload.error;
        break;
      case FETCH_ARTICLES_RESET:
        draft.data = [];
        draft.isLoading = false;
        draft.isSuccess = false;
        draft.isFail = false;
        draft.error = null;
        break;

      case FETCH_CREATE_ARTICLES_REQUEST:
        draft.isPostLoading = true;
        draft.isPostSuccess = false;
        draft.isPostFail = false;
        draft.errorPost = null;
        break;
      case FETCH_CREATE_ARTICLES_SUCCESS:
        draft.isPostSuccess = true;
        draft.isPostLoading = false;
        break;
      case FETCH_CREATE_ARTICLES_FAILURE:
        draft.isPostLoading = false;
        draft.isPostFail = true;
        draft.errorPost = action.payload.error;
        break;
      case FETCH_CREATE_ARTICLES_RESET:
        draft.isPostLoading = false;
        draft.isPostSuccess = false;
        draft.isPostFail = false;
        draft.errorPost = null;
        break;

      case FETCH_EDIT_ARTICLES_REQUEST:
        draft.isPostLoading = true;
        draft.isPostSuccess = false;
        draft.isPostFail = false;
        draft.errorPost = null;
        break;
      case FETCH_EDIT_ARTICLES_SUCCESS:
        draft.isPostSuccess = true;
        draft.isPostLoading = false;
        break;
      case FETCH_EDIT_ARTICLES_FAILURE:
        draft.isPostLoading = false;
        draft.isPostFail = true;
        draft.errorPost = action.payload.error;
        break;
      case FETCH_EDIT_ARTICLES_RESET:
        draft.isPostLoading = false;
        draft.isPostSuccess = false;
        draft.isPostFail = false;
        draft.errorPost = null;
        break;

      case FETCH_DELETE_ARTICLES_REQUEST:
        draft.isDeleteLoading = true;
        draft.isDeleteSuccess = false;
        draft.isDeleteFail = false;
        break;
      case FETCH_DELETE_ARTICLES_SUCCESS:
        draft.isDeleteSuccess = true;
        draft.isDeleteLoading = false;
        break;
      case FETCH_DELETE_ARTICLES_FAILURE:
        draft.isDeleteLoading = false;
        draft.isDeleteFail = true;
        draft.errorDelete = action.payload.error;
        break;
      case FETCH_DELETE_ARTICLES_RESET:
        draft.isDeleteLoading = false;
        draft.isDeleteSuccess = false;
        draft.isDeleteFail = false;
        break;
    }
  });

export default articlesReducer;
