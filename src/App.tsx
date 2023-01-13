import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import _map from "lodash/map";

import LoginPageContainer from "./containers/LoginPageContainer";
import ArticlesPageContainer from "./containers/ArticlesPageContainer";
import RegisterPageComponent from "./components/RegisterPageComponent";

interface RouteProps {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}

export default function App() {
  const pageRoutes = [
    {
      path: ["/", "/login"],
      component: <LoginPageContainer />,
      exact: true,
    },
    {
      path: "/register",
      component: <RegisterPageComponent />,
    },
    {
      path: "/dashboard/user",
      component: <>dashboard/user</>,
    },
    {
      path: "/dashboard/articles",
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
