import { Typography } from "@mui/material";
import AlbumList from "../components/albums/AlbumList";
import { useEffect, useState } from "react";

const Home = () => {
  const [albums, setAlbums] = useState([]);
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

  function removeItemHandler(id) {
    fetch(
      `https://react-album-1a909-default-rtdb.firebaseio.com/albums/${id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      console.log("Data dihapus");
      setAlbums((prevPhoto) => {
        return prevPhoto.filter((photo) => photo.id !== id);
      });
    });
  }

  return (
    <>
      <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
        Albums
      </Typography>
      <AlbumList photos={albums} removeItem={removeItemHandler} />
    </>
  );
};

export default Home;
