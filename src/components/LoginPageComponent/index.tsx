import React, { FC, useState } from "react";

import _get from "lodash/get";
import { useHistory } from "react-router-dom";

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
import CircularProgress from "../../Atomic/atoms/CircularProgress";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import md5 from "md5";

import { ILogin } from "../../store/login/types";
import { registerPageURL } from "../../contants";

interface Props {
  children?: React.ReactNode;
  handleLoginRequest: (params: ILogin) => void;
  isLoading: boolean;
  error?: string;
  isFail: boolean;
}

const LoginPageComponent: FC<Props> = ({
  children,
  handleLoginRequest,
  isLoading,
  isFail,
  error,
}) => {
  let history = useHistory();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const defaultValues = {
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email là bắt buộc.")
      .email("Vui lòng nhập đúng cấu trúc Email."),
    password: yup.string().required("Mật khẩu là bắt buộc."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSuccess = (data: ILogin) => {
    handleLoginRequest({
      email: _get(data, "email", ""),
      password: md5(_get(data, "password", "")),
    });
  };

  const onFail = () => {};

  return (
    <FormLoginTemplate>
      <SectionTemplate>
        <TextGrid
          label={
            <Typography variant="h6">
              <b>Đăng Nhập</b>
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
              <Controller
                name="email"
                control={control}
                render={(cProps: any) => (
                  <TextField
                    placeholder="Nhập Email"
                    value={cProps.value}
                    onChange={(e) => cProps.field.onChange(e.target.value)}
                    size="small"
                    fullWidth
                    error={!!_get(errors, "email", "")}
                    helperText={_get(errors, "email.message", "")}
                    required
                  />
                )}
              />
            </Box>
            <Box>
              <Typography variant="body2" gutterBottom>
                <b>
                  Mật khẩu&nbsp;
                  <span style={{ color: "red" }}>*</span>
                </b>
              </Typography>

              <Controller
                name="password"
                control={control}
                render={(cProps: any) => (
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
                    error={!!_get(errors, "password", "")}
                    helperText={_get(errors, "password.message", "")}
                    required
                    value={cProps.value}
                    onChange={(e) => cProps.field.onChange(e.target.value)}
                  />
                )}
              />
            </Box>

            {isFail && <Alert severity="error">{error}</Alert>}

            <Box>
              <Button
                color="primary"
                variant="outlined"
                fullWidth
                size="large"
                onClick={handleSubmit(onSuccess, onFail)}
                disabled={isLoading}
                endIcon={isLoading && <CircularProgress size={20} />}
              >
                Đăng nhập
              </Button>
            </Box>

            <Box>
              <Divider />
            </Box>

            <Box display="flex" justifyContent="center">
              <Typography variant="body2">Chưa có tài khoản?&nbsp;</Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
                onClick={() => history.push(registerPageURL)}
              >
                Đăng ký tham gia miễn phí.
              </Typography>
            </Box>
          </SectionTemplate>
        </Box>
      </SectionTemplate>
    </FormLoginTemplate>
  );
};

export default LoginPageComponent;
