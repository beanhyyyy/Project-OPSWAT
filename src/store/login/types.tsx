import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_RESET,
} from "./actionTypes";

export interface ILogin {
  email?: string;
  password?: string;
}

export interface LoginState {
  isLoading: boolean;
  isSuccess: boolean;
  isFail: boolean;
  data: ILogin[];
  error: string | null;
}

export interface FetchLoginSuccessPayload {
  data: any;
}

export interface FetchLoginFailurePayload {
  error: string;
}

export interface FetchLoginRequest {
  type: typeof FETCH_LOGIN_REQUEST;
  params: ILogin;
}

export type FetchLoginSuccess = {
  type: typeof FETCH_LOGIN_SUCCESS;
  payload: FetchLoginSuccessPayload;
};

export type FetchLoginFailure = {
  type: typeof FETCH_LOGIN_FAILURE;
  payload: FetchLoginFailurePayload;
};

export type FetchLoginReset = {
  type: typeof FETCH_LOGIN_RESET;
};

export type LoginActions =
  | FetchLoginRequest
  | FetchLoginSuccess
  | FetchLoginFailure
  | FetchLoginReset;
