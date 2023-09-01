import { Link } from "react-router-dom";
import { Box, Typography, Link as LinkBase } from "@mui/material";

const Admin = () => {
  return (
    <Box component="section">
      <Typography variant="h3" component="h1">
        Admin
      </Typography>
      <Typography variant="p" component="p" gutterBottom>
        Admin page
      </Typography>
      <LinkBase component={Link} underline="none" to="/">
        Home
      </LinkBase>
    </Box>
  );
};

export default Admin;
