import { Delete, MoreVert } from "@mui/icons-material";
import {
  Box,
  // Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
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
  // const [showMore, setShowMore] = useState(false);

  const toglleModal = () => setOpen(!open);
  const toggleDialog = () => setOpenDialog(!openDialog);

  function removeItemHandler(val) {
    toggleDialog();
    if (val) return removeItem(photo._id);
  }
  function editItemHandler(editPhoto) {
    editItem(editPhoto);
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
        }}
        raised
      >
        <CardMedia
          component="img"
          height={200}
          // height="100%"
          alt={photo.name}
          image={photo.image}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            sx={{
              flexGrow: 1,
              mt: 2,
              minHeight: "75px",
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
              <Modal
                open={open}
                onClose={toglleModal}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  outline: 0,
                }}
              >
                <Box
                  sx={{
                    height: 0,
                  }}
                >
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
          <Divider sx={{ borderBottomWidth: 2, mb: 2 }} />
          <Box>
            <Typography variant="caption" color="text.secondary" component="p">
              {dayjs(photo.date).format("DD/MM/YYYY")}
            </Typography>
            <Typography variant="body2" component="p">
              {photo.description}
            </Typography>
            {/* <Typography variant="body2" component="p">
              {showMore
                ? photo.description
                : photo.description.substring(0, 200)}
            </Typography> */}
          </Box>
        </CardContent>
        {/* <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Button size="small">Detail</Button>
        </Box> */}
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
