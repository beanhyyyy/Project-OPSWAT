import React, { FC, useState } from "react";

import { useHistory } from "react-router-dom";

import _get from "lodash/get";

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
import md5 from 'md5';

import { IRegister } from "../../store/register/types";
import { loginPageURL } from "../../contants";

interface Props {
  children?: React.ReactNode;
  handleRegisterRequest: (params: IRegister) => void;
  isLoading: boolean;
  error?: string;
  isFail: boolean;
}

const RegisterPageComponent: FC<Props> = ({
  children,
  handleRegisterRequest,
  isLoading,
  isFail,
  error,
}) => {
  let history = useHistory();

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

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    repassword: "",
  };

  const schema = yup.object().shape({
    username: yup.string().required("T??n l?? b???t bu???c."),
    email: yup
      .string()
      .required("Email l?? b???t bu???c.")
      .email("Vui l??ng nh???p ????ng c???u tr??c Email."),
    password: yup.string().required("M???t kh???u l?? b???t bu???c."),
    repassword: yup
      .string()
      .label("Nh???p l???i m???t kh???u l?? b???t bu???c.")
      .required()
      .oneOf([yup.ref("password"), null], "Nh???p l???i m???t kh???u ch??a tr??ng kh???p."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSuccess = (data: IRegister) => {
    handleRegisterRequest({
      username: _get(data, "username", ""),
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
              <b>????ng K??</b>
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
                  T??n&nbsp;
                  <span style={{ color: "red" }}>*</span>
                </b>
              </Typography>
              <Controller
                name="username"
                control={control}
                render={(cProps: any) => (
                  <TextField
                    placeholder="Nh???p h??? v?? t??n"
                    value={cProps.value}
                    onChange={(e) => cProps.field.onChange(e.target.value)}
                    size="small"
                    fullWidth
                    error={!!_get(errors, "username", "")}
                    helperText={_get(errors, "username.message", "")}
                    required
                  />
                )}
              />
            </Box>

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
                    placeholder="Nh???p Email"
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
                  M???t kh???u&nbsp;
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

            <Box>
              <Typography variant="body2" gutterBottom>
                <b>
                  Nh???p l???i m???t kh???u&nbsp;
                  <span style={{ color: "red" }}>*</span>
                </b>
              </Typography>

              <Controller
                name="repassword"
                control={control}
                render={(cProps: any) => (
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
                    error={!!_get(errors, "repassword", "")}
                    helperText={_get(errors, "repassword.message", "")}
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
                ????ng k??
              </Button>
            </Box>

            <Box>
              <Divider />
            </Box>

            <Box display="flex" justifyContent="center">
              <Typography variant="body2">???? c?? t??i kho???n?&nbsp;</Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
                onClick={() => history.push(loginPageURL)}
              >
                ????ng nh???p.
              </Typography>
            </Box>
          </SectionTemplate>
        </Box>
      </SectionTemplate>
    </FormLoginTemplate>
  );
};

export default RegisterPageComponent;
