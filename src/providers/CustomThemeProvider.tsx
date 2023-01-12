import React, { FC } from "react";

import CssBaseline from "../Atomic/atoms/CssBaseline";
import ThemeProvider from "../Atomic/atoms/ThemeProvider";
import useThemeOpswat from "../theme/useThemeOpswat";

// https://material-ui.com/customization/palette/#dark-mode
/* https://material-ui.com/customization/globals/#global-css */

interface Props {
  children: React.ReactNode;
}

const CustomThemeProvider: FC<Props> = ({ children }) => {
  const opswatTheme = useThemeOpswat();

  return (
    <ThemeProvider theme={opswatTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
