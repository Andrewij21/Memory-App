import { Delete, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, minHeight: 380 }} raised>
        <CardMedia
          component="img"
          height={150}
          alt={photo.name}
          image={photo.image}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ minHeight: 70 }}
          >
            <Typography gutterBottom variant="h6" component="h3">
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
              <Dialog
                fullWidth
                open={openDialog}
                onClose={toggleDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle color="error" id="alert-dialog-title">
                  {"Delete Item"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    color="InfoText"
                    id="alert-dialog-description"
                  >
                    Are you sure want to delete item?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => removeItemHandler(false)}
                    variant="contained"
                    color="text"
                  >
                    Cancle
                  </Button>
                  <Button
                    onClick={() => removeItemHandler(true)}
                    autoFocus
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </DialogActions>
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
