import { Delete, MoreVert } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Grid,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useState } from "react";
import AlbumForm from "./AlbumForm";
import AlertDialog from "../ui/AlertDialog";

const AlbumItem = ({ photo, removeItem, editItem }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toglleModal = () => setOpen(!open);
  const toggleDialog = () => setOpenDialog(!openDialog);

  function removeItemHandler(val) {
    toggleDialog();
    if (val) return removeItem(photo.id);
  }
  function editItemHandler(editPhoto) {
    editItem(editPhoto);
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        raised
      >
        <CardMedia
          component="img"
          // height={150}
          alt={photo.name}
          image={photo.image}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexGrow: 1,
              my: 2,
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {photo.name}
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Tooltip title="Delete">
                <IconButton
                  aria-label="delete"
                  color="error"
                  size="small"
                  disableRipple
                  onClick={toggleDialog}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Tooltip>
              <Dialog fullWidth open={openDialog} onClose={toggleDialog}>
                <AlertDialog removeItem={removeItemHandler} />
              </Dialog>
              <Tooltip title="Edit">
                <IconButton
                  aria-label="more"
                  size="small"
                  disableRipple
                  onClick={toglleModal}
                >
                  <MoreVert fontSize="small" />
                </IconButton>
              </Tooltip>
              <Modal open={open} onClose={toglleModal}>
                <Box>
                  <AlbumForm
                    title={"Edit Photo"}
                    detail={photo}
                    editItem={editItemHandler}
                    closeModal={toglleModal}
                  />
                </Box>
              </Modal>
            </Box>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary" component="p">
              {dayjs(photo.date).format("DD/MM/YYYY")}
            </Typography>
            <Typography variant="body2" component="p">
              {photo.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

AlbumItem.propTypes = {
  photo: PropTypes.object,
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
};
export default AlbumItem;
