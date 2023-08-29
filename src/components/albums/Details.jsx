// import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import dayjs from "dayjs";
import PropTypes from "prop-types";
import FullImage from "./FullImage";
import ImageDetails from "./ImageDetails";

const Details = ({ details, image }) => {
  return (
    <>
      {!image ? (
        <ImageDetails details={details} />
      ) : (
        <FullImage image={image} />
      )}
    </>
  );
  // return <ImageDetails details={details} />;
};

Details.propTypes = {
  details: PropTypes.object,
  image: PropTypes.object,
};
export default Details;
