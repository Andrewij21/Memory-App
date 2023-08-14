import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CameraIcon from "@mui/icons-material/CameraAlt";
import { AccountCircle } from "@mui/icons-material";
import { Link as LinkBase } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  const pages = [
    { name: "Album", path: "/" },
    { name: "New Photo", path: "/new-photo" },
    { name: "menu", path: "/#" },
  ];
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="album"
            disableRipple
          >
            <CameraIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginRight: 5 }}>
            My-Album
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "end",
              marginRight: 2,
              gap: 2,
              // backgroundColor: "#333",
            }}
          >
            {pages.map((page) => (
              <Button key={page.name} sx={{ my: 2, color: "white" }}>
                <LinkBase
                  component={Link}
                  color="inherit"
                  underline="none"
                  to={page.path}
                >
                  {page.name}
                </LinkBase>
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
