import { CardMedia, Paper } from "@mui/material";

const FullImage = (image) => {
  return (
    <Paper
      sx={{
        display: "flex",
        maxWidth: "100vh",
        maxHeight: "80vh",
        alignSelf: "center",
        backgroundColor: "transparent",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          objectFit: "contain",
        }}
        alt={image.name}
        // image={image.image}
        image={image.image}
      />
    </Paper>
  );
};

export default FullImage;
