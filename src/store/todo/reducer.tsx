/* eslint-disable import/no-anonymous-default-export */
import produce from "immer";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from "./actionTypes";

import { TodoActions, TodoState } from "./types";

export const initialState: TodoState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFail: false,
  error: null,
};

const todoReducer = (state = initialState, action: TodoActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        draft.isLoading = true;
        break;
      case FETCH_TODO_SUCCESS:
        draft.isSuccess = true;
        draft.isLoading = false;
        draft.data = action.payload.data;
        break;
      case FETCH_TODO_FAILURE:
        draft.isLoading = false;
        draft.isFail = true;
        break;
    }
  });

export default todoReducer;
