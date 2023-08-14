import { Container, Typography } from "@mui/material";
import MeetupList from "../components/albums/AlbumList";
// import data from "../data.json";
import { useEffect, useState } from "react";

const Home = () => {
  let [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("https://react-album-1a909-default-rtdb.firebaseio.com/albums.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let loadedAlbums = [];
        for (const key in data) {
          loadedAlbums.push({ id: key, ...data[key] });
        }
        // console.log(data);
        // console.log(loadedAlbums);
        setAlbums(loadedAlbums);
      });
  }, []);
  return (
    <Container>
      {albums.map((album) => {
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
