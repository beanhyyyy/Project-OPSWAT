import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeSelectRegister } from "../../store/register/selectors";
import {
  fetchRegisterRequest,
  fetchRegisterReset,
} from "../../store/register/actions";

import RegisterPageComponent from "../../components/RegisterPageComponent";
import { IRegister } from "../../store/register/types";

interface Props {
  children?: React.ReactNode;
}

const RegisterPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const register = useSelector(makeSelectRegister());
  const { isLoading, error, isFail, isSuccess } = register;

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchRegisterReset());
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleRegisterRequest = (params: IRegister) => {
    dispatch(fetchRegisterRequest(params));
  };

  return (
    <RegisterPageComponent
      handleRegisterRequest={handleRegisterRequest}
      isLoading={isLoading}
      error={error}
      isFail={isFail}
    />
  );
};

export default RegisterPageContainer;
