import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_RESET,
} from "./actionTypes";

export interface IRegister {
  username?: string;
  email?: string;
  password?: string;
}

export interface RegisterState {
  isLoading: boolean;
  isSuccess: boolean;
  isFail: boolean;
  data: IRegister[];
  error: string | null;
}

export interface FetchRegisterSuccessPayload {
  data: any;
}

export interface FetchRegisterFailurePayload {
  error: string;
}

export interface FetchRegisterRequest {
  type: typeof FETCH_REGISTER_REQUEST;
  params: IRegister;
}

export type FetchRegisterSuccess = {
  type: typeof FETCH_REGISTER_SUCCESS;
  payload: FetchRegisterSuccessPayload;
};

export type FetchRegisterFailure = {
  type: typeof FETCH_REGISTER_FAILURE;
  payload: FetchRegisterFailurePayload;
};

export type FetchRegisterReset = {
  type: typeof FETCH_REGISTER_RESET;
};

export type RegisterActions =
  | FetchRegisterRequest
  | FetchRegisterSuccess
  | FetchRegisterFailure
  | FetchRegisterReset;
