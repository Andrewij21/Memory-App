import { Grid } from "@mui/material";
import MeetupItem from "./MeetupItem";
const MeetupList = () => {
  return (
    <Grid container spacing={5}>
      <MeetupItem />
      <MeetupItem />
      <MeetupItem />
      <MeetupItem />
    </Grid>
  );
};

export default MeetupList;
