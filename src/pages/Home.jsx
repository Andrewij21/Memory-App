import { Typography } from "@mui/material";
import AlbumList from "../components/albums/AlbumList";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;

    const getPhoto = async () => {
      try {
        const { data } = await axiosPrivate.get("/album");

        isMounted && setAlbums(data.data);
      } catch (error) {
        console.error(error);
        setAlbums([]);
      }
    };
    getPhoto();
    return () => {
      isMounted = false;
    };
  }, [axiosPrivate, refresh]);

  async function removeItemHandler(id) {
    try {
      await axiosPrivate.delete(`/album/${id}`);
      setRefresh(!refresh);
      console.log("data di hapus");
    } catch (error) {
      console.log({ error });
    }
  }
  async function editItemHandler(editPhoto) {
    try {
      await axiosPrivate.patch(`/album/${editPhoto._id}`, editPhoto);
      setRefresh(!refresh);
      console.log("data di edit");
    } catch (error) {
      console.log({ error });
    }
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
