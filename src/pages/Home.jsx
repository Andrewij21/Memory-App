import { Typography } from "@mui/material";
import AlbumList from "../components/albums/AlbumList";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const getPhoto = async () => {
      try {
        const { data } = await axiosPrivate.get(`/album/user/${auth.user}`);

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
  }, [axiosPrivate, refresh, auth]);

  async function removeItemHandler(id) {
    try {
      await axiosPrivate.delete(`/album/${id}`);
      setRefresh(!refresh);
      console.log("data di hapus");
    } catch (error) {
      console.log({ error });
    }
  }
  async function editItemHandler({ editPhoto, id }) {
    try {
      await axiosPrivate.patch(`/album/${id}`, editPhoto, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
      {albums.length === 0 ? (
        <Typography component="h2" variant="subtitle1" gutterBottom>
          Your Album is empty
        </Typography>
      ) : (
        <AlbumList
          photos={albums}
          removeItem={removeItemHandler}
          editItem={editItemHandler}
        />
      )}
    </>
  );
};

export default Home;
