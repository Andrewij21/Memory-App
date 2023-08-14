import { Paper, Typography, Link as LinkBase } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <LinkBase component={Link} color="inherit" to="https://mui.com/">
        Your Website
      </LinkBase>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function FooterNavigation() {
  return (
    <Paper
      sx={{
        py: 3,
        mt: 10,
        backgroundColor: "primary.dark",
        color: "white",
      }}
      elevation={6}
      component="footer"
      square
    >
      <Typography variant="h6" component="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        // color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Paper>
  );
}
