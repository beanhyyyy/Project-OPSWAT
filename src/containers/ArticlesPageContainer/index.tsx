import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeSelectArticles } from "../../store/articles/selectors";
import { fetchArticlesRequest } from "../../store/articles/actions";

import ArticlesPageComponent from "../../components/ArticlesPageComponent";
import DashboardTemplate from "../../Atomic/templates/DashboardTemplate";
import Appbar from "../../Atomic/organisms/Appbar";
import Sidebar from "../../Atomic/organisms/Sidebar";

interface Props {
  children?: React.ReactNode;
}

const ArticlesPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const articles = useSelector(makeSelectArticles());
  const { isLoading } = articles;

  useEffect(() => {
    if (!isLoading) {
      console.log(111);
      dispatch(fetchArticlesRequest());
    }
  }, []);

  return (
    <>
      <DashboardTemplate
        content={<ArticlesPageComponent />}
        appbar={<Appbar />}
        sidebar={<Sidebar />}
      />
    </>
  );
};

export default ArticlesPageContainer;
