import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeSelectLogin } from "../../store/login/selectors";
import { fetchLoginRequest, fetchLoginReset } from "../../store/login/actions";

import LoginPageComponent from "../../components/LoginPageComponent";
import { ILogin } from "../../store/login/types";
import { articlesPageURL } from "../../contants";

interface Props {
  children?: React.ReactNode;
}

const LoginPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const login = useSelector(makeSelectLogin());
  const { isLoading, error, isFail, isSuccess } = login;

  useEffect(() => {
    if (isSuccess) {
      dispatch(fetchLoginReset());
      history.push(articlesPageURL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleLoginRequest = (params: ILogin) => {
    dispatch(fetchLoginRequest(params));
  };

  return (
    <LoginPageComponent
      handleLoginRequest={handleLoginRequest}
      isLoading={isLoading}
      error={error}
      isFail={isFail}
    />
  );
};

export default LoginPageContainer;
