import { Grid } from "@mui/material";
import MeetupItem from "./AlbumItem";
import PropTypes from "prop-types";

const AlbumList = ({ photos }) => {
  return (
    <Grid container spacing={5}>
      {photos.map((photo) => {
        return <MeetupItem photo={photo} key={photo.id} />;
      })}
    </Grid>
  );
};

AlbumList.propTypes = {
  photos: PropTypes.array,
};
export default AlbumList;
