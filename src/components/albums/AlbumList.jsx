import { Grid } from "@mui/material";
import MeetupItem from "./AlbumItem";
import PropTypes from "prop-types";

const MeetupList = ({ photos }) => {
  return (
    <Grid container spacing={5}>
      {photos.map((photo) => {
        return <MeetupItem photo={photo} key={photo.id} />;
      })}
    </Grid>
  );
};

MeetupList.propTypes = {
  photos: PropTypes.array,
};
export default MeetupList;
