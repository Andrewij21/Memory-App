import { Delete, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
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
import Details from "./Details";

const AlbumItem = ({ photo, removeItem, editItem }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [fullImage, setFullImage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  // const [showMore, setShowMore] = useState(false);

  const toglleModal = () => setOpenEdit(!openEdit);
  const toggleDialog = () => setOpenDialog(!openDialog);
  const toggleFullImage = () => setFullImage(!fullImage);
  const toggleDetailsImage = () => setOpenDetails(!openDetails);

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        raised
      >
        <CardMedia
          sx={{
            // 16:9
            // pt: "56.25%",
            cursor: "pointer",
            aspectRatio: 16 / 9,
          }}
          onClick={toggleFullImage}
          component="img"
          alt={photo.name}
          image={photo.image}
        />
        <Modal
          open={fullImage}
          onClose={toggleFullImage}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box component="div" sx={{ outline: 0, alignSelf: "center" }}>
            <Details image={photo} />
          </Box>
        </Modal>
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
              {photo.name.substring(0, 50)}
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
                open={openEdit}
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
            <Typography
              variant="body2"
              component="p"
              sx={{ overflowWrap: "break-word" }}
            >
              {photo.description.substring(0, 180)}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Button size="small" onClick={toggleDetailsImage}>
            Detail
          </Button>
          <Modal
            open={openDetails}
            onClose={toggleDetailsImage}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box component="div" sx={{ outline: 0, alignSelf: "center" }}>
              <Details details={photo} />
            </Box>
          </Modal>
        </Box>
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
