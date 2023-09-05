import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as LinkBase } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

export default function AuthForm({ type, handler, title }) {
  const email = useRef();
  const password = useRef();
  const { setPresist, presist } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    if (type === "login") return handler(user);
  };

  useEffect(() => {
    localStorage.setItem("presist", presist);
  }, [presist]);
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
        Sign in
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
          <Grid item xs={12}>
            <TextField
              // error={errorPassword}
              inputRef={password}
              required
              fullWidth
              label="Password"
              type="password"
            />
          </Grid>
          {type === "register" && (
            <Grid item xs={12}>
              <TextField
                // error={errorPassword}
                // inputRef={confirmPassword}
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                // helperText={errorPassword && "Password not match"}
              />
            </Grid>
          )}
          {type !== "register" && (
            <Grid item xs={12}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={presist}
                      onChange={() => setPresist((prev) => !prev)}
                    />
                  }
                  label="Trust this device"
                />
              </FormGroup>
            </Grid>
          )}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, textTransform: "uppercase" }}
        >
          {title}
        </Button>
        <Grid container>
          {type !== "register" ? (
            <>
              <Grid item xs>
                <LinkBase
                  to="#"
                  component={Link}
                  variant="body2"
                  underline="none"
                >
                  Forgot password?
                </LinkBase>
              </Grid>
              <Grid item>
                <LinkBase
                  to="/registration"
                  component={Link}
                  variant="body2"
                  underline="none"
                >
                  Does not have an account? Sign up
                </LinkBase>
              </Grid>
            </>
          ) : (
            <Grid item>
              <Typography variant="body2" component="p">
                Already have an account?
              </Typography>
              <LinkBase
                to="/login"
                component={Link}
                variant="body2"
                underline="none"
              >
                Sign in
              </LinkBase>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

AuthForm.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
};
