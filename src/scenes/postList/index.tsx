import { Alert, Box, CircularProgress, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/postCard";
import { postActions } from "../../redux/actions";

const PostList = () => {
  const postList = useSelector((state: any) => state.post.list);
  const deletePost = useSelector((state: any) => state.post.delete);
  const putPost = useSelector((state: any) => state.post.put);
  const dispatch: any = useDispatch();

  const [deletedId, setDeletedId] = useState(0);

  useEffect(() => {
    fetchListApi();
  }, []);

  useEffect(() => {
    if (deletePost.success) {
      fetchListApi();
    }
  }, [deletePost]);

  useEffect(() => {
    if (putPost.success) {
      fetchListApi();
    }
  }, [putPost]);

  const fetchListApi = () => {
    dispatch(postActions.getPostListInProgress({}));
    setDeletedId(0);
  };

  const handleEdit = (postId: Number) => {
    const selectedPost = postList.data.find((post: any) => post.id === postId);
    dispatch(postActions.setPost(selectedPost));
  };

  const handleDelete = (postId: Number) => {
    if (window.confirm()) {
      setDeletedId(Number(postId));
      dispatch(postActions.deletePostInProgress({ postId }));
    }
  };

  return (
    <Box>
      <Grid
        container
        flexDirection={"column"}
        alignItems={postList.data.length === 0 ? "center" : "left"}
      >
        {postList.inProgress ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          <Fragment>
            {postList.data.map((post: any, key: Number) => (
              <Grid item key={String(key)}>
                <PostCard
                  title={post.title}
                  body={post.body}
                  postId={post.id}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  loading={post.id === deletedId}
                />
              </Grid>
            ))}
            {postList.data.length === 0 && !postList.error && (
              <Grid item>
                <Alert severity='warning'>Post list is empty.</Alert>
              </Grid>
            )}
          </Fragment>
        )}
        {postList.error && (
          <Grid item>
            <Alert severity='error'>{postList.message}</Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default PostList;
