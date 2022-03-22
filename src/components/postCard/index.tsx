import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Fragment } from "react";

const PostCard = ({
  title,
  body,
  handleEdit,
  postId,
  handleDelete,
  loading,
}: propTypes) => {
  return (
    <Paper sx={{ marginBottom: "40px" }} elevation={5}>
      <Box>
        <Grid
          container
          flexDirection={"row"}
          flexWrap='nowrap'
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ padding: "10px 0px" }}
        >
          <Grid item>
            <Typography variant='h5' sx={{ padding: "5px 10px" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            {loading ? (
              <Box padding={"0px 20px"}>
                <CircularProgress size={30} />
              </Box>
            ) : (
              <Fragment>
                {" "}
                <Button
                  sx={{ padding: "7px 15px", margin: "0px 10px" }}
                  variant={"contained"}
                  color={"primary"}
                  onClick={() => handleEdit(postId)}
                >
                  <Typography variant='body2'>edit</Typography>
                </Button>
                <Button
                  sx={{ padding: "7px 15px", margin: "0px 10px" }}
                  variant={"contained"}
                  color={"error"}
                  onClick={() => handleDelete(postId)}
                >
                  <Typography variant='body2'>delete</Typography>
                </Button>
              </Fragment>
            )}
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='body1' sx={{ padding: "10px" }}>
          {body}
        </Typography>
      </Box>
    </Paper>
  );
};

interface propTypes {
  title: String;
  body: String;
  postId: Number;
  handleEdit: Function;
  handleDelete: Function;
  loading: Boolean;
}

export default PostCard;
