import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const email = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Forget Password
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 3,
          width: "70vh",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              inputRef={email}
              name="email"
              required
              fullWidth
              label="Email"
              autoFocus
              type="email"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, textTransform: "uppercase" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
