import React, { FC } from "react";

import _get from "lodash/get";

import Box from "../../Atomic/atoms/Box";
import Button from "../../Atomic/atoms/Button";
import TextField from "../../Atomic/atoms/TextField";
import Alert from "../../Atomic/atoms/Alert";
import Grid from "../../Atomic/atoms/Grid";
import CircularProgress from "../../Atomic/atoms/CircularProgress";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IArticles } from "../../store/articles/types";

interface Props {
  children?: React.ReactNode;
  handleCreateArticle: (params: IArticles) => void;
  isPostLoading: boolean;
  isPostFail: boolean;
  errorPost: string | null;
  itemData?: IArticles;
  type: string;
  handleEditArticle: (params: IArticles) => void;
}

const FormArticles: FC<Props> = ({
  children,
  handleCreateArticle,
  isPostLoading,
  isPostFail,
  errorPost,
  itemData,
  type,
  handleEditArticle,
}) => {
  const defaultValues = {
    title: _get(itemData, "title", ""),
    description: _get(itemData, "description", ""),
    body: _get(itemData, "body", ""),
  };

  const schema = yup.object().shape({
    title: yup.string().required("Title là bắt buộc."),
    description: yup.string().required("Description là bắt buộc."),
    body: yup.string().required("Body là bắt buộc."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSuccess = (data: IArticles) => {
    if (type === "edit") {
      handleEditArticle({
        id: _get(itemData, "id"),
        title: _get(data, "title", ""),
        description: _get(data, "description", ""),
        body: _get(data, "body", ""),
        tagList: ["string"],
      });
    } else {
      handleCreateArticle({
        title: _get(data, "title", ""),
        description: _get(data, "description", ""),
        body: _get(data, "body", ""),
        tagList: ["string"],
      });
    }
  };

  const onFail = () => {};

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="title"
            control={control}
            render={(cProps: any) => (
              <TextField
                defaultValue={_get(itemData, "title")}
                label="Title"
                value={cProps.value}
                onChange={(e) => cProps.field.onChange(e.target.value)}
                size="small"
                fullWidth
                error={!!_get(errors, "title", "")}
                helperText={_get(errors, "title.message", "")}
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            render={(cProps: any) => (
              <TextField
                defaultValue={_get(itemData, "description")}
                label="Description"
                value={cProps.value}
                onChange={(e) => cProps.field.onChange(e.target.value)}
                size="small"
                fullWidth
                error={!!_get(errors, "description", "")}
                helperText={_get(errors, "description.message", "")}
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="body"
            control={control}
            render={(cProps: any) => (
              <TextField
                defaultValue={_get(itemData, "body")}
                label="Body"
                value={cProps.value}
                onChange={(e) => cProps.field.onChange(e.target.value)}
                size="small"
                fullWidth
                error={!!_get(errors, "body", "")}
                helperText={_get(errors, "body.message", "")}
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          {isPostFail && <Alert severity="error">{errorPost}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Button
              onClick={handleSubmit(onSuccess, onFail)}
              variant="contained"
              disabled={isPostLoading}
              endIcon={isPostLoading && <CircularProgress size={20} />}
            >
              {type === "create" ? "Create" : "Edit"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormArticles;
