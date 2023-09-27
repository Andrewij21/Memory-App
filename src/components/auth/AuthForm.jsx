import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert, Link as LinkBase } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

export default function AuthForm({ type, handler, title }) {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const { setPresist, presist } = useAuth();

  const checkPassword = (password, confirmPassword) => {
    return password.replace(/\s/g, "") !== confirmPassword.replace(/\s/g, "")
      ? false
      : true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorEmail(false);
    setErrorPassword(false);
    seterrorMessage(null);
    const user = {
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current?.value,
    };
    if (type !== "login") {
      const status = checkPassword(user.password, user.confirmPassword);
      if (!status) {
        setErrorPassword(true);
        return seterrorMessage("Password is not match");
      }
    }

    delete user.confirmPassword;
    const status = await handler(user);
    // const status = error.response.status;
    // console.log({ error });
    if (status === 409) {
      setErrorEmail(true);
      seterrorMessage("Email already exist");
    } else if (status === 404 || status === 401) {
      setErrorEmail(true);
      setErrorPassword(true);
      seterrorMessage("Username or password is incorrect");
    } else {
      seterrorMessage("Success");
    }
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
        {title}
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
              error={errorEmail}
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
              error={errorPassword}
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
                error={errorPassword}
                inputRef={confirmPassword}
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
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
                  to="/forgetpassword"
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
          <Grid item xs={12} mt={2}>
            {errorMessage && (
              <Alert severity="error" variant="outlined">
                {errorMessage}
              </Alert>
            )}
          </Grid>
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
