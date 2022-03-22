import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

const SimpleCard = ({ title, children }: simpleCardProps) => {
  return (
    <Paper elevation={3}>
      <Box padding={2}>
        <Typography variant='h5'>{title}</Typography>
        <Box padding={"20px 0px"}>{children}</Box>
      </Box>
    </Paper>
  );
};

interface simpleCardProps {
  title: string;
  children: ReactNode;
}

export default SimpleCard;
