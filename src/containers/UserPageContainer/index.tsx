import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeSelectArticles } from "../../store/articles/selectors";
import { fetchArticlesRequest } from "../../store/articles/actions";

import DashboardTemplate from "../../Atomic/templates/DashboardTemplate";
import Appbar from "../../Atomic/organisms/Appbar";
import Sidebar from "../../Atomic/organisms/Sidebar";
import UserPageComponent from "../../components/UserPageComponent";

interface Props {
  children?: React.ReactNode;
}

const UserPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const articles = useSelector(makeSelectArticles());
  const { isLoading } = articles;

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchArticlesRequest());
    }
  }, []);

  return (
    <>
      <DashboardTemplate
        content={<UserPageComponent />}
        appbar={<Appbar />}
        sidebar={<Sidebar />}
      />
    </>
  );
};

export default UserPageContainer;
