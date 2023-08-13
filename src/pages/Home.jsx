import { Container, Typography } from "@mui/material";
import MeetupList from "../components/meetups/MeetupList";
import data from "../data.json";

const Home = () => {
  return (
    <Container>
      {data.map((album) => {
        return (
          <div key={album.id}>
            <Typography
              component="h1"
              variant="h4"
              fontWeight="bold"
              marginBottom={3}
            >
              {album.name}
            </Typography>
            <MeetupList photos={album.photos} />
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
