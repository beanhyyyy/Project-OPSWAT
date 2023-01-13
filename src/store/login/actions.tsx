import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_RESET,
} from "./actionTypes";
import {
  FetchLoginRequest,
  FetchLoginSuccess,
  FetchLoginSuccessPayload,
  FetchLoginFailure,
  FetchLoginFailurePayload,
  ILogin,
  FetchLoginReset,
} from "./types";

export const fetchLoginRequest = (
  params: ILogin
): FetchLoginRequest => ({
  type: FETCH_LOGIN_REQUEST,
  params,
});

export const fetchLoginSuccess = (
  payload: FetchLoginSuccessPayload
): FetchLoginSuccess => ({
  type: FETCH_LOGIN_SUCCESS,
  payload,
});

export const fetchLoginFailure = (
  payload: FetchLoginFailurePayload
): FetchLoginFailure => ({
  type: FETCH_LOGIN_FAILURE,
  payload,
});

export const fetchLoginReset = (): FetchLoginReset => ({
  type: FETCH_LOGIN_RESET,
});
