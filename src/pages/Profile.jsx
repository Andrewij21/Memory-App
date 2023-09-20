import { Avatar, Grid, Paper, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar>A</Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography component="label" variant="caption" color="grey">
            Name:
          </Typography>
          <Typography component="p" variant="subtitle1">
            Andre wijaya
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="label" variant="caption" color="grey">
            Name:
          </Typography>
          <Typography component="p" variant="subtitle1">
            test
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="label" variant="caption" color="grey">
            email
          </Typography>
          <Typography component="p" variant="subtitle1">
            test@mail.com
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
