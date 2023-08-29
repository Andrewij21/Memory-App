import { Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const ImageDetails = ({ details }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "100vh",
        maxHeight: "80vh",
        alignSelf: "center",
      }}
      raised
    >
      <CardContent
        sx={{
          overflowY: "auto",
          overflowWrap: "break-word",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
            component="p"
            gutterBottom
          >
            {dayjs(details.date).format("DD/MM/YYYY")}
          </Typography>
          <Typography variant="body2" component="p">
            {details.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
ImageDetails.propTypes = {
  details: PropTypes.object,
};
export default ImageDetails;
