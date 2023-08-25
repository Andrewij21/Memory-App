import { Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { IconButton, Paper, Stack, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"© "}
      {new Date().getFullYear() + " "}
      Andre Wijaya | All Rights Reserved
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
        MY-ALBUM
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mb={1}
      >
        <IconButton size="medium" color="inherit">
          <Instagram fontSize="medium" />
        </IconButton>
        <IconButton size="medium" color="inherit">
          <Twitter fontSize="medium" />
        </IconButton>
        <IconButton size="medium" color="inherit">
          <LinkedIn fontSize="medium" />
        </IconButton>
        <IconButton size="medium" color="inherit">
          <WhatsApp fontSize="medium" />
        </IconButton>
      </Stack>

      {/* <Typography
        variant="subtitle1"
        align="center"
        // color="text.secondary"
        component="p"
        gutterBottom
      >
        Something here to give the footer a purpose!
      </Typography> */}
      <Copyright />
    </Paper>
  );
}
