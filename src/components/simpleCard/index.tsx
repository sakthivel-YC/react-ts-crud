import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

const SimpleCard = ({ title, children }: simpleCardProps) => {
  return (
    <Paper elevation={3}>
      <Box padding={2}>
        <Typography variant='h5' data-testid={"title-test"}>
          {title}
        </Typography>
        <Box padding={"20px 0px"} data-testid={"child-prop-test"}>
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

interface simpleCardProps {
  title: string;
  children: ReactNode;
}

export default SimpleCard;
