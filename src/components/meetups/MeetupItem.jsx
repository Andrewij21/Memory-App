import { Delete, MoreVert } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const MeetupItem = ({ photo }) => {
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
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h6" component="h3">
              {photo.name}
            </Typography>
            <Box>
              <IconButton aria-label="delete" color="error" size="small">
                <Delete fontSize="small" />
              </IconButton>
              <IconButton aria-label="more" size="small">
                <MoreVert fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary" component="p">
              {photo.date}
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

MeetupItem.propTypes = {
  photo: PropTypes.object,
};
export default MeetupItem;
