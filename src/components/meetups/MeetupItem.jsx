import { Delete } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const MeetupItem = () => {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }} raised>
        <CardMedia
          component="img"
          alt="green iguana"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h6" component="h3">
              Lizard
            </Typography>
            <IconButton aria-label="delete" color="error" size="small">
              <Delete fontSize="small" />
            </IconButton>
          </Box>

          <Box>
            <Typography variant="body2" color="text.secondary" component="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MeetupItem;
