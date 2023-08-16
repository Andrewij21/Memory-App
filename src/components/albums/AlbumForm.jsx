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

const AlbumForm = ({ addItem, editItem, title, detail, closeModal }) => {
  const name = useRef();
  const image = useRef();
  const description = useRef();
  const [date, setDate] = useState(dayjs);

  const handleSubmit = (event) => {
    event.preventDefault();
    const photo = {
      name: name.current.value,
      image: image.current.value,
      description: description.current.value,
      date: date.toJSON(),
    };
    // console.log(photo);
    if (detail.id !== null) {
      closeModal();
      return editItem({ ...photo, id: detail.id });
    }
    addItem(photo);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        marginTop: 5,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          width: 600,
        }}
      >
        <Typography component="h1" variant="h4">
          {title}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                defaultValue={detail.name}
                inputRef={name}
                required
                fullWidth
                label="Title"
                autoFocus
                placeholder="insert title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                defaultValue={detail.image}
                inputRef={image}
                type="url"
                label="image"
                name="image"
                placeholder="insert image url"
              />
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
                defaultValue={detail.description}
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
            Add Photo
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
