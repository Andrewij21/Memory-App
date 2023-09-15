import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRef, useState } from "react";
import { Paper } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { CloudUpload } from "@mui/icons-material";

const AlbumForm = ({ addItem, editItem, title, detail, closeModal }) => {
  const { auth } = useAuth();
  const name = useRef();
  const [image, setImage] = useState();
  const description = useRef();
  const [date, setDate] = useState(dayjs(detail?.date));
  const handleSubmit = (event) => {
    event.preventDefault();

    const photo = {
      name: name.current.value,
      image: image,
      description: description.current.value,
      date: date.toJSON(),
      user: auth.user,
    };
    console.log({ photo });
    if (detail?._id) {
      closeModal();
      return editItem({ ...photo, _id: detail._id });
    }
    addItem(photo);
  };

  return (
    <Box
      sx={{
        // position: "absolute",
        // left: "50%",
        // transform: "translate(-50%)",
        marginTop: 5,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
        }}
      >
        <Typography component="h1" variant="h4">
          {title}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                defaultValue={detail?.name}
                inputRef={name}
                required
                fullWidth
                label="Title"
                autoFocus
                placeholder="insert title"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                required
                fullWidth
                defaultValue={detail?.image}
                inputRef={image}
                type="url"
                label="image"
                name="image"
                placeholder="insert image url"
              /> */}
              <Button
                variant="outlined"
                component="label"
                size="medium"
                startIcon={<CloudUpload />}
              >
                Upload File
                <input
                  type="file"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Button>
              <Typography
                sx={{ display: "inline-block", ml: 2 }}
                variant="subtitle1"
                component="p"
              >
                {image?.name || detail?.image || "(.png, .jpg, .jpeg)"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                defaultValue={detail?.description}
                inputRef={description}
                fullWidth
                label="Description"
                multiline
                rows={3}
                placeholder="Input description"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 1 }}
          >
            {title}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

AlbumForm.propTypes = {
  addItem: PropTypes.func,
  editItem: PropTypes.func,
  closeModal: PropTypes.func,
  title: PropTypes.string,
  detail: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
export default AlbumForm;
