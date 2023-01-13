import React, { FC, useState } from "react";

import FormLoginTemplate from "../../Atomic/templates/FormLoginTemplate";
import SectionTemplate from "../../Atomic/templates/SectionTemplate";
import TextGrid from "../../Atomic/molecules/Text/TextGrid";
import Box from "../../Atomic/atoms/Box";
import Button from "../../Atomic/atoms/Button";
import Typography from "../../Atomic/atoms/Typography";
import TextField from "../../Atomic/atoms/TextField";
import Alert from "../../Atomic/atoms/Alert";
import IconButton from "../../Atomic/atoms/IconButton";
import Divider from "../../Atomic/atoms/Divider";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface Props {
  children?: React.ReactNode;
}

const RegisterPageComponent: FC<Props> = ({ children }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const handleMouseDownRePassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <FormLoginTemplate>
      <SectionTemplate>
        <TextGrid
          label={
            <Typography variant="h6">
              <b>Đăng Kí</b>
            </Typography>
          }
          containerProps={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
          hasColon={false}
        />

        <Box pt={1}>
          <SectionTemplate>
            <Box>
              <Typography variant="body2" gutterBottom>
                <b>
                  Email&nbsp;
                  <span style={{ color: "red" }}>*</span>
                </b>
              </Typography>
              <TextField placeholder="Nhập Email" size="small" fullWidth />
            </Box>

            <Box>
              <Typography variant="body2" gutterBottom>
                <b>
                  Mật khẩu&nbsp;
                  <span style={{ color: "red" }}>*</span>
                </b>
              </Typography>
              <TextField
                placeholder="*******"
                size="small"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <RemoveRedEyeOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" gutterBottom>
                <b>
                  Nhập lại mật khẩu&nbsp;
                  <span style={{ color: "red" }}>*</span>
                </b>
              </Typography>
              <TextField
                placeholder="*******"
                size="small"
                fullWidth
                type={showRePassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowRePassword}
                      onMouseDown={handleMouseDownRePassword}
                      edge="end"
                    >
                      {showRePassword ? (
                        <RemoveRedEyeOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Box>

            <Alert severity="error">
              Thông tin đăng nhập không đúng, vui lòng kiểm tra lại.
            </Alert>

            <Box>
              <Button color="primary" variant="outlined" fullWidth size="large">
                Đăng kí
              </Button>
            </Box>

            <Box>
              <Divider />
            </Box>

            <Box display="flex" justifyContent="center">
              <Typography variant="body2">Đã có tài khoản?&nbsp;</Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                Đăng nhập.
              </Typography>
            </Box>
          </SectionTemplate>
        </Box>
      </SectionTemplate>
    </FormLoginTemplate>
  );
};

export default RegisterPageComponent;
