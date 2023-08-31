import { Typography } from "@mui/material";
import AlbumList from "../components/albums/AlbumList";
import { useEffect, useState } from "react";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/album")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let loadedAlbums = [];
        for (const key in data.data) {
          loadedAlbums.push({ id: key, ...data.data[key] });
        }
        console.log(data);
        // console.log(loadedAlbums);
        setAlbums(data.data);
      })
      .catch((err) => {
        console.log({ err });
        setAlbums([]);
      });
  }, [refresh]);

  function removeItemHandler(id) {
    fetch(`http://localhost:3000/album/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Data dihapus");
      setRefresh(!refresh);
      // setAlbums((prevPhoto) => {
      //   return prevPhoto.filter((photo) => photo.id !== id);
      // });
    });
  }
  function editItemHandler(editPhoto) {
    fetch(`http://localhost:3000/album/${editPhoto._id}`, {
      method: "PATCH",
      body: JSON.stringify(editPhoto),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setRefresh(!refresh);
      console.log("Data diedit");
    });
  }
  return (
    <>
      <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
        Albums
      </Typography>
      <AlbumList
        photos={albums}
        removeItem={removeItemHandler}
        editItem={editItemHandler}
      />
    </>
  );
};

export default Home;
