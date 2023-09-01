import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <Box component="section">
      <Typography variant="h3" component="h1">
        Unauthorized
      </Typography>
      <Typography variant="p" component="p" gutterBottom>
        You do not have access to this page
      </Typography>
      <Button onClick={backHandler}>Go back</Button>
    </Box>
  );
};

export default Unauthorized;
