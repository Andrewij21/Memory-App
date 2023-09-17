import { Grid, Pagination } from "@mui/material";
import MeetupItem from "./AlbumItem";
import PropTypes from "prop-types";

const AlbumList = ({
  photos,
  removeItem,
  editItem,
  pageHandler,
  count,
  page,
}) => {
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
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination count={count} page={page} onChange={pageHandler} />
      </Grid>
    </Grid>
  );
};

AlbumList.propTypes = {
  photos: PropTypes.array,
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
  pageHandler: PropTypes.func,
  count: PropTypes.number,
  page: PropTypes.number,
};
export default AlbumList;
