/* eslint-disable import/no-anonymous-default-export */
import produce from "immer";

import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_RESET,
} from "./actionTypes";

import { LoginActions, LoginState } from "./types";

export const initialState: LoginState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFail: false,
  error: null,
};

const loginReducer = (state = initialState, action: LoginActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_LOGIN_REQUEST:
        draft.isLoading = true;
        draft.error = null;
        draft.isSuccess = false;
        draft.isFail = false;
        break;
      case FETCH_LOGIN_SUCCESS:
        draft.isSuccess = true;
        draft.isLoading = false;
        draft.data = action.payload.data;
        break;
      case FETCH_LOGIN_FAILURE:
        draft.isLoading = false;
        draft.isFail = true;
        draft.error = action.payload.error;
        break;
      case FETCH_LOGIN_RESET:
        draft.data = [];
        draft.isLoading = false;
        draft.isSuccess = false;
        draft.isFail = false;
        draft.error = null;
      break;
    }
  });

export default loginReducer;
