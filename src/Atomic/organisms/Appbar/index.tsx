import React, { FC } from "react";

import Box from "../../atoms/Box";
import Typography from "../../atoms/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";

interface Props {
  children?: React.ReactNode;
}

const Appbar: FC<Props> = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box display="flex" alignItems="center">
        <AcUnitIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "primary",
            textDecoration: "none",
          }}
        >
          OPSWAT
        </Typography>
      </Box>
    </Box>
  );
};

export default Appbar;
