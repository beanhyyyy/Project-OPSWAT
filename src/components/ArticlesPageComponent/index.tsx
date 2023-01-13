import React, { FC, useState, useEffect } from "react";

import _size from "lodash/size";
import _map from "lodash/map";
import _get from "lodash/get";

import Grid from "../../Atomic/atoms/Grid";
import Button from "../../Atomic/atoms/Button";
import Typography from "../../Atomic/atoms/Typography";
import Paper from "../../Atomic/atoms/Paper";
import Alert from "../../Atomic/atoms/Alert";
import Box from "../../Atomic/atoms/Box";
import TableContainer from "../../Atomic/atoms/TableContainer";
import CircularProgress from "../../Atomic/atoms/CircularProgress";
import Table from "../../Atomic/atoms/Table";
import TableHead from "../../Atomic/atoms/TableHead";
import TableRow from "../../Atomic/atoms/TableRow";
import TableCell from "../../Atomic/atoms/TableCell";
import TableBody from "../../Atomic/atoms/TableBody";

import { IArticles } from "../../store/articles/types";
import Card from "../../Atomic/atoms/Card";
import DialogAdvanced from "../../Atomic/organisms/DialogAdvanced";
import FormArticles from "./FormArticles";

interface Props {
  data: IArticles;
  isLoading: boolean;
  isSuccess: boolean;
  isFail: boolean;
  isPostLoading: boolean;
  isPostFail: boolean;
  errorPost: string | null;
  handleCreateArticle: (params: IArticles) => void;
  handleResetArticle: () => void;
  handleEditArticle: (params: IArticles) => void;
  handleDeleteArticle: (params: IArticles) => void;
  isDeleteFail: boolean;
  errorDelete: boolean;
  handleResetDeleteArticle: () => void;
}

const ArticlesPageComponent: FC<Props> = ({
  data,
  isLoading,
  isSuccess,
  isFail,
  handleCreateArticle,
  isPostLoading,
  isPostFail,
  errorPost,
  handleResetArticle,
  handleEditArticle,
  handleDeleteArticle,
  isDeleteFail,
  errorDelete,
  handleResetDeleteArticle,
}) => {
  const [openUpdate, setOpenUpdate] = useState("");
  const [itemData, setItemData] = useState();

  useEffect(() => {
    if (isDeleteFail) {
      alert(errorDelete);
      handleResetDeleteArticle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteFail]);
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Card sx={{ padding: 2 }} variant="outlined">
            <Typography variant="h6">
              <b>Articles List</b>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs="auto">
          <Button variant="contained" onClick={() => setOpenUpdate("create")}>
            Create Articles
          </Button>
        </Grid>
        <Grid item xs={12}>
          {isLoading ? (
            <Box textAlign="center" p={5}>
              <CircularProgress />
            </Box>
          ) : (
            <Paper
              style={{
                width: "100%",
              }}
              variant="outlined"
            >
              {_size(data) < 1 && !isLoading && (
                <Alert color="info">Data not found</Alert>
              )}

              <TableContainer>
                <Table aria-label="tour table" size="small">
                  {_size(data) > 0 && !isLoading && isSuccess && (
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          style={{
                            minWidth: 45,
                          }}
                        >
                          <b>NO.</b>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            minWidth: 150,
                          }}
                        >
                          <b>Title</b>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            minWidth: 150,
                          }}
                        >
                          <b>Body</b>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            minWidth: 150,
                          }}
                        >
                          <b>Author</b>
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            minWidth: 150,
                          }}
                        >
                          <b>Note</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                  )}

                  <TableBody>
                    {_map(data, (item, idx) => (
                      <TableRow hover key={idx.toString()}>
                        <TableCell align="center">{idx + 1}</TableCell>
                        <TableCell>
                          <Typography variant="body2" paragraph>
                            {_get(item, "title", "")}
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => {
                                setOpenUpdate("edit");
                                setItemData(item);
                              }}
                            >
                              Sửa
                            </Button>
                            &ensp;
                            <Button
                              color="secondary"
                              variant="outlined"
                              size="small"
                              onClick={() => handleDeleteArticle(item.id)}
                            >
                              Xóa
                            </Button>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" paragraph>
                            {_get(item, "body", "")}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" paragraph>
                            Username:&nbsp;
                            <b>{_get(item, "author.username", "")}</b>
                          </Typography>
                          <Typography variant="body2" paragraph>
                            Email:&nbsp;<b>{_get(item, "author.email", "")}</b>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" paragraph>
                            Created:&nbsp;
                            <b>
                              {_get(item, "created", "") &&
                                new Date(
                                  _get(item, "created", "")
                                ).toDateString()}
                            </b>
                          </Typography>
                          <Typography variant="body2" paragraph>
                            Updated:&nbsp;
                            <b>
                              {_get(item, "updated", "") &&
                                new Date(
                                  _get(item, "updated", "")
                                ).toDateString()}
                            </b>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </Grid>

        {isFail && (
          <Grid item xs={12}>
            <Alert color="error">ERROR</Alert>
          </Grid>
        )}
      </Grid>

      <DialogAdvanced
        open={!!openUpdate}
        onClose={() => {
          setOpenUpdate("");
          handleResetArticle();
        }}
        title={openUpdate === "create" ? "Create Article" : "Edit Article"}
        dialogProps={{ scroll: "body", fullWidth: true, maxWidth: "sm" }}
        content={
          <FormArticles
            type={openUpdate}
            handleCreateArticle={handleCreateArticle}
            isPostLoading={isPostLoading}
            isPostFail={isPostFail}
            errorPost={errorPost}
            itemData={itemData}
            handleEditArticle={handleEditArticle}
          />
        }
      />
    </>
  );
};

export default ArticlesPageComponent;
