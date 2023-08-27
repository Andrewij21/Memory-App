import { Grid } from "@mui/material";
import MeetupItem from "./AlbumItem";
import PropTypes from "prop-types";

const AlbumList = ({ photos, removeItem, editItem }) => {
  return (
    <Grid container spacing={5}>
      {photos.map((photo) => {
        return (
          <MeetupItem
            photo={photo}
            key={photo._id}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </Grid>
  );
};

AlbumList.propTypes = {
  photos: PropTypes.array,
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
};
export default AlbumList;
