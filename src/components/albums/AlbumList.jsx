import { Grid } from "@mui/material";
import MeetupItem from "./AlbumItem";
import PropTypes from "prop-types";

const AlbumList = ({ photos, removeItem }) => {
  return (
    <Grid container spacing={5}>
      {photos.map((photo) => {
        return (
          <MeetupItem photo={photo} key={photo.id} removeItem={removeItem} />
        );
      })}
    </Grid>
  );
};

AlbumList.propTypes = {
  photos: PropTypes.array,
  removeItem: PropTypes.func,
};
export default AlbumList;
