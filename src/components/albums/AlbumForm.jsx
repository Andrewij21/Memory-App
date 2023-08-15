import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Paper } from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const AlbumForm = ({ addPhoto }) => {
  const [date, setDate] = useState(dayjs);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const photo = {
      name: data.get("title"),
      image: data.get("image"),
      description: data.get("description"),
      date: date.toJSON(),
    };
    console.log();
    addPhoto(photo);
  };

  return (
    <Box
      sx={{
        // bgcolor: "red",
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          Add Photo
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
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
                fullWidth
                label="Description"
                multiline
                rows={4}
                placeholder="Input description"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Photo
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

AlbumForm.propTypes = {
  addPhoto: PropTypes.func,
};
export default AlbumForm;
