import React, { FC } from "react";

import Box from "../../atoms/Box";
import AppBar from "../../atoms/AppBar";
import Drawer from "../../atoms/Drawer";
import useMediaQuery from "../../atoms/UseMediaQuery";
import Toolbar from "../../atoms/Toolbar";
import useTheme from "../../atoms/UseTheme";

const drawerWidth = 320;

interface Props {
  open?: boolean;
  onCloseDrawer?: () => {};
  appbar: any;
  sidebar: any;
  content: React.ReactNode;
}

const DashboardTemplate: FC<Props> = ({
  open,
  onCloseDrawer,
  appbar,
  sidebar,
  content,
}) => {
  const themeData = useTheme();
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up("lg")); // https://mui.com/material-ui/migration/v5-component-changes/#hidden

  return (
    <Box sx={{ display: "flex" }}>
      {appbar && (
        <AppBar
          position="fixed"
          color="inherit"
          sx={(theme) => ({
            zIndex: theme.zIndex.appBar + 1,
          })}
        >
          <Toolbar>{appbar}</Toolbar>
        </AppBar>
      )}

      {sidebar && (
        <Box
          component="nav"
          sx={{
            width: { lg: drawerWidth },
            flexShrink: { lg: 0 },
          }}
        >
          {!isDesktop && (
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              <Drawer
                aria-label="mobile sidebar"
                variant="temporary"
                anchor={themeData.direction === "rtl" ? "right" : "left"}
                open={open}
                onClose={onCloseDrawer}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={(theme) => ({
                  "& .MuiDrawer-paper": {
                    zIndex: theme.zIndex.appBar,
                    width: drawerWidth,
                    borderRight: 0,
                  },
                })}
              >
                <Box>{sidebar}</Box>
              </Drawer>
            </Box>
          )}
          {isDesktop && (
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Drawer
                aria-label="desktop sidebar"
                variant="permanent"
                open
                sx={(theme) => ({
                  "& .MuiDrawer-paper": {
                    zIndex: theme.zIndex.appBar,
                    width: drawerWidth,
                    borderRight: 0,
                  },
                })}
              >
                <Toolbar />
                <Box>{sidebar}</Box>
              </Drawer>
            </Box>
          )}
        </Box>
      )}

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          maxWidth:
            (sidebar && {
              xs: `calc(100%)`,
              lg: `calc(100% - ${drawerWidth}px)`,
            }) ||
            "100%",
          padding: theme.spacing(2),
        })}
      >
        {appbar && <Toolbar />}
        {content}
      </Box>
    </Box>
  );
};

export default DashboardTemplate;
