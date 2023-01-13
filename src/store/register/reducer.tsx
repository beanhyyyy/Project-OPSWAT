/* eslint-disable import/no-anonymous-default-export */
import produce from "immer";

import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_RESET,
} from "./actionTypes";

import { RegisterActions, RegisterState } from "./types";

export const initialState: RegisterState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isFail: false,
  error: null,
};

const registerReducer = (state = initialState, action: RegisterActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_REGISTER_REQUEST:
        draft.isLoading = true;
        draft.error = null;
        draft.isSuccess = false;
        draft.isFail = false;
        break;
      case FETCH_REGISTER_SUCCESS:
        draft.isSuccess = true;
        draft.isLoading = false;
        draft.data = action.payload.data;
        break;
      case FETCH_REGISTER_FAILURE:
        draft.isLoading = false;
        draft.isFail = true;
        draft.error = action.payload.error;
        break;
      case FETCH_REGISTER_RESET:
        draft.data = [];
        draft.isLoading = false;
        draft.isSuccess = false;
        draft.isFail = false;
        draft.error = null;
      break;
    }
  });

export default registerReducer;
