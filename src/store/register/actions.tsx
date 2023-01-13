import {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_RESET,
} from "./actionTypes";
import {
  FetchRegisterRequest,
  FetchRegisterSuccess,
  FetchRegisterSuccessPayload,
  FetchRegisterFailure,
  FetchRegisterFailurePayload,
  IRegister,
  FetchRegisterReset,
} from "./types";

export const fetchRegisterRequest = (
  params: IRegister
): FetchRegisterRequest => ({
  type: FETCH_REGISTER_REQUEST,
  params,
});

export const fetchRegisterSuccess = (
  payload: FetchRegisterSuccessPayload
): FetchRegisterSuccess => ({
  type: FETCH_REGISTER_SUCCESS,
  payload,
});

export const fetchRegisterFailure = (
  payload: FetchRegisterFailurePayload
): FetchRegisterFailure => ({
  type: FETCH_REGISTER_FAILURE,
  payload,
});

export const fetchRegisterReset = (): FetchRegisterReset => ({
  type: FETCH_REGISTER_RESET,
});
