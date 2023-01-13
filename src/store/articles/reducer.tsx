/* eslint-disable import/no-anonymous-default-export */
import produce from "immer";
import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from "./actionTypes";

import { ArticlesActions, ArticlesState } from "./types";

export const initialState: ArticlesState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFail: false,
  error: null,
};

const articlesReducer = (state = initialState, action: ArticlesActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ARTICLES_REQUEST:
        draft.isLoading = true;
        break;
      case FETCH_ARTICLES_SUCCESS:
        draft.isSuccess = true;
        draft.isLoading = false;
        draft.data = action.payload.data;
        break;
      case FETCH_ARTICLES_FAILURE:
        draft.isLoading = false;
        draft.isFail = true;
        break;
    }
  });

export default articlesReducer;
