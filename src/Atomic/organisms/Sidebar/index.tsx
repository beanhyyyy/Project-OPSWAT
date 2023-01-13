import React, { FC } from "react";

import _includes from 'lodash/includes';

import { useHistory, useLocation } from "react-router-dom";

import ListItem from "../../atoms/ListItem";
import List from "../../atoms/List";
import { articlesPageURL, userPageURL } from "../../../contants";

interface Props {
  children?: React.ReactNode;
}

const Sidebar: FC<Props> = ({ children }) => {
  let history = useHistory();
  let location = useLocation();
  let pathname = location.pathname;

  const pageArray = [
    {
      path: userPageURL,
      name: "User",
    },
    {
      path: articlesPageURL,
      name: "Articles",
    },
  ];

  return (
    <>
      <List>
        {pageArray.map((item) => (
          <ListItem
            key={item.name}
            button
            sx={{ color: "inherit" }}
            onClick={() => history.push(item.path)}
            selected={!!_includes(item.path, pathname)}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
