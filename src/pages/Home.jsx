import { Typography } from "@mui/material";
import AlbumList from "../components/albums/AlbumList";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const { auth } = useAuth();
  let content;
  let contentExist;

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const getPhoto = async () => {
      try {
        const { data } = await axiosPrivate.get(
          `/album/user/?user=${auth.user}&page=${page}`
        );

        if (isMounted) {
          console.log({ data });
          setCount(data.pagination.totalPages);
          setAlbums(data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setAlbums([]);
      }
    };
    getPhoto();
    return () => {
      isMounted = false;
    };
  }, [axiosPrivate, refresh, auth, page]);

  function pageHandler(event, page) {
    console.log({ page });
    setPage(page);
  }
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

  contentExist =
    albums.length === 0 ? (
      <Typography component="h2" variant="subtitle1" gutterBottom>
        Your Album is empty
      </Typography>
    ) : (
      <AlbumList
        photos={albums}
        removeItem={removeItemHandler}
        editItem={editItemHandler}
        pageHandler={pageHandler}
        count={count}
        page={page}
      />
    );
  content = isLoading ? <p>Loading....</p> : contentExist;

  return (
    <>
      <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
        Albums
      </Typography>
      {content}
    </>
  );
};

export default Home;
