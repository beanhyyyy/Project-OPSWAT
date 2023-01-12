import { useMemo } from "react";

import createTheme from "../Atomic/atoms/CreateTheme";

export default function useThemeOpswat() {

  const opswatTheme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                overflowX: "hidden",
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: () => ({
                borderRadius: 4,
                borderColor: "#0ac46b",
                "& label.Mui-focused": {
                  color: "#0ac46b",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#0ac46b",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#0ac46b",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0ac46b",
                  },
                },
              }),
            },
          },
          MuiLink: {
            defaultProps: {
              underline: "hover",
            },
          },
          MuiBackdrop: {
            styleOverrides: {
              root: {
                WebkitBackdropFilter: `blur(10px)`,
                backdropFilter: `blur(10px)`,
                backgroundColor: "rgba(17, 17, 17, 0.2)",
              },
            },
          },
          MuiIconButton: {
            defaultProps: {
              color: "inherit",
            },
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1366,
            xl: 1920,
          },
        },
        direction: "rtl", // chuyển đổi hướng bố cục rtl || ltr
        palette: {
          mode: "light", // dark || light
          primary: {
            main: "#3F89DF",
            contrastText: "#fff",
          },
          secondary:{
            main: "#ff2e5f",
            contrastText: "#fff",
          },
          info: {
            main: "#24a8d8",
            contrastText: "#fff",
          },
          success: {
            main: "#0ac46b",
            contrastText: "#fff",
          },
          error: {
            main: "#d7373f",
            contrastText: "#fff",
          },
          warning: {
            main: "#ff9100",
            contrastText: "#fff",
          },
          background: {
            default: "#fafafa",
            paper: "#fff",
          },
          divider: "#a7a7a7",
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [],
  );

  return opswatTheme;
}
