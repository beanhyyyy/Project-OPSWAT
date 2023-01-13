import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeSelectTodo } from "../../store/todo/selectors";
import { fetchTodoRequest } from "../../store/todo/actions";

import RegisterPageComponent from "../../components/RegisterPageComponent";

interface Props {
  children?: React.ReactNode;
}

const RegisterPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const todo = useSelector(makeSelectTodo());
  const { isLoading } = todo;

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchTodoRequest());
    }
  }, []);

  return <RegisterPageComponent />;
};

export default RegisterPageContainer;
