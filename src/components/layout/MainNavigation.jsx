import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CameraIcon from "@mui/icons-material/CameraAlt";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle, Logout } from "@mui/icons-material";
import { Avatar, Link as LinkBase, ListItemIcon, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useLogout from "../../hooks/useLogout";

export default function MainNavigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const logout = useLogout();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  const handleProfile = async () => {
    // await logout();
    navigate("/profile");
  };

  const pages = [
    { name: "Album", path: "/" },
    { name: "New Photo", path: "/new-photo" },
    // { name: "menu", path: "/#" },
  ];
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <LinkBase
            component={Link}
            underline="none"
            color="inherit"
            to="/"
            sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="album"
              disableRipple
            >
              <CameraIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              My-Album
            </Typography>
          </LinkBase>
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
          <Tooltip title="Account setting">
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton> */}
            <IconButton
              // size="small"
              aria-label="account of current user"
              color="inherit"
              onClick={handleClick}
            >
              <Avatar>A</Avatar>
              {/* <AccountCircle /> */}
            </IconButton>
          </Tooltip>
          <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
            <MenuItem onClick={handleProfile}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
