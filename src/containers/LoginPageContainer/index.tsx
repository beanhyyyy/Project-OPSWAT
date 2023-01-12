import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeSelectTodo } from "../../store/todo/selectors";
import { fetchTodoRequest } from "../../store/todo/actions";

import LoginPageComponent from "../../components/LoginPageComponent";

interface Props {
  children?: React.ReactNode;
}

const LoginPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const todo = useSelector(makeSelectTodo());
  const { isLoading } = todo;

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchTodoRequest());
    }
  }, []);

  return <LoginPageComponent />;
};

export default LoginPageContainer;
