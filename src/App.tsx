import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import SimpleCard from "./components/simpleCard";
import PostList from "./scenes/postList";
import PostsForm from "./scenes/postsForm";
import "./styles/app.css";

function App() {
  return (
    <Box>
      <Grid container flexDirection={"row"} spacing={3} padding={3}>
        <Grid item lg={4} sm={12}>
          <SimpleCard title={"Post Form"}>
            <PostsForm />
          </SimpleCard>
        </Grid>
        <Grid item lg={8} sm={12}>
          <SimpleCard title={"Post List"}>
            <PostList />
          </SimpleCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
