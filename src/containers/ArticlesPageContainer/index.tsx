import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeSelectArticles } from "../../store/articles/selectors";
import {
  fetchArticlesRequest,
  fetchCreateArticlesRequest,
  fetchCreateArticlesReset,
  fetchEditArticlesRequest,
} from "../../store/articles/actions";

import ArticlesPageComponent from "../../components/ArticlesPageComponent";
import DashboardTemplate from "../../Atomic/templates/DashboardTemplate";
import Appbar from "../../Atomic/organisms/Appbar";
import Sidebar from "../../Atomic/organisms/Sidebar";
import { IArticles } from "../../store/articles/types";

interface Props {
  children?: React.ReactNode;
}

const ArticlesPageContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const articles = useSelector(makeSelectArticles());
  const {
    isLoading,
    data,
    isSuccess,
    isFail,
    isPostLoading,
    isPostFail,
    errorPost,
  } = articles;

  const handleCreateArticle = (params: IArticles) => {
    dispatch(fetchCreateArticlesRequest(params));
  };

  const handleEditArticle = (params: IArticles) => {
    dispatch(fetchEditArticlesRequest(params));
  };

  const handleResetArticle = () => {
    dispatch(fetchCreateArticlesReset());
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchArticlesRequest());
    }
  }, []);

  return (
    <>
      <DashboardTemplate
        content={
          <ArticlesPageComponent
            data={data.articles}
            isSuccess={isSuccess}
            isFail={isFail}
            isLoading={isLoading}
            handleCreateArticle={handleCreateArticle}
            isPostLoading={isPostLoading}
            isPostFail={isPostFail}
            errorPost={errorPost}
            handleResetArticle={handleResetArticle}
            handleEditArticle={handleEditArticle}
          />
        }
        appbar={<Appbar />}
        sidebar={<Sidebar />}
      />
    </>
  );
};

export default ArticlesPageContainer;
