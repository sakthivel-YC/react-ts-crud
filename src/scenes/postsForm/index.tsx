import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { USER_ID } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../redux/actions";
import { Alert, CircularProgress, Grid } from "@mui/material";

type FormData = {
  title: string;
  body: string;
};

const PostsForm = () => {
  const { handleSubmit, control, reset, setValue } = useForm<FormData>();
  const dispatch = useDispatch();
  const putPost = useSelector((state: any) => state.post.put);
  const setPost = useSelector((state: any) => state.post.setPost);

  const onSubmit = (data: FormData) => {
    const formData: any = { ...data, userId: USER_ID };
    if (setPost) {
      formData["id"] = setPost.id;
    }
    dispatch(postActions.putPostInProgress({ formData }));
  };

  useEffect(() => {
    if (setPost) {
      setValue("title", setPost["title"]);
      setValue("body", setPost["body"]);
    }
  }, [setPost]);

  const handleReset = () => {
    reset();
    dispatch(postActions.resetForm());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <Controller
            name='title'
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <TextField
                autoComplete={"off"}
                size='small'
                label={"Title"}
                inputProps={{ onChange, value: value ? value : "", ref }}
                error={!!error}
                helperText={!!error && "Required field"}
                placeholder='Please enter a title'
              />
            )}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <Controller
            name='body'
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <TextField
                multiline={true}
                rows={5}
                autoComplete={"off"}
                size='small'
                label={"Content"}
                inputProps={{ onChange, value: value ? value : "", ref }}
                error={Boolean(error)}
                helperText={Boolean(error) && "Required field"}
                placeholder='Please enter a content'
              />
            )}
          />
        </FormControl>

        {putPost.inProgress ? (
          <Grid container justifyContent={"center"}>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid
            container
            justifyContent={"space-between"}
            flexDirection={"row"}
            flexWrap='nowrap'
          >
            <Grid item>
              <Button
                variant='contained'
                type='button'
                color='error'
                onClick={handleReset}
              >
                Reset
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' type='submit'>
                {setPost ? "Update" : "add"}
              </Button>
            </Grid>
          </Grid>
        )}
      </form>
      <br />
      {putPost.success && (
        <Grid item>
          <Alert severity='success'>{putPost.message}</Alert>
        </Grid>
      )}
      {putPost.error && (
        <Grid item>
          <Alert severity='error'>{putPost.message}</Alert>
        </Grid>
      )}
    </>
  );
};

export default PostsForm;
