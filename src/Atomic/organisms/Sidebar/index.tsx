import React, { FC } from "react";
import { Link } from "react-router-dom";

import ListItem from "../../atoms/ListItem";
import List from "../../atoms/List";

interface Props {
  children?: React.ReactNode;
}

const Sidebar: FC<Props> = ({ children }) => {
  const pageArray = [
    {
      path: "/dashboard/user",
      name: "User",
    },
    {
      path: "/dashboard/articles",
      name: "Articles",
    },
  ];

  return (
    <>
      <List>
        {pageArray.map((item) => (
          <Link
            to={item.path}
            style={{ textDecoration: "none" }}
            key={item.name}
          >
            <ListItem button sx={{ color: "inherit" }}>
              {item.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
