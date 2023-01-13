import React, { FC } from "react";

import backgroundImage from "../../../assets/images/background-image.jpg";
import BackgroundPage from "../../organisms/BackgroundPage";

import Box from "../../atoms/Box";
import Grid from "../../atoms/Grid";
import Card from "../../atoms/Card";

interface Props {
  children: React.ReactNode;
}

const FormLoginTemplate: FC<Props> = ({ children }) => {
  return (
    <BackgroundPage
      background='https://newsfeed-cdn.hahalolo.com/shared/assets/img/banner/banner-hahalolo-app-v2.jpg'
      customStyles={{ minHeight: "100vh" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingRight: { md: "10%" },
          paddingX: { xs: "2%" },
          paddingY: { xs: "5%" },
        }}
      >
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item xs={12} md={5} lg={4} xl={3}>
            <Card sx={{ padding: 5 }}>{children}</Card>
          </Grid>
        </Grid>
      </Box>
    </BackgroundPage>
  );
};

export default FormLoginTemplate;
