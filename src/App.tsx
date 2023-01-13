import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import _map from "lodash/map";

import LoginPageContainer from "./containers/LoginPageContainer";
import ArticlesPageContainer from "./containers/ArticlesPageContainer";
import RegisterPageContainer from "./containers/RegisterPageContainer";
import { articlesPageURL, loginPageURL, registerPageURL, userPageURL } from "./contants";
import UserPageContainer from "./containers/UserPageContainer";

interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}

export default function App() {
  const pageRoutes = [
    {
      path: ["/", loginPageURL],
      component: <LoginPageContainer />,
      exact: true,
    },
    {
      path: registerPageURL,
      component: <RegisterPageContainer />,
    },
    {
      path: userPageURL,
      component: <UserPageContainer />,
    },
    {
      path: articlesPageURL,
      component: <ArticlesPageContainer />,
    },
    {
      path: "*",
      component: <>Page not found</>,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Switch>
          {_map(pageRoutes, (route: RouteProps, idx: any) => (
            <Route key={idx.toString()} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}
