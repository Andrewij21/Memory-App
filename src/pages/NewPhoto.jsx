import { useNavigate } from "react-router-dom";
import AlbumForm from "../components/albums/AlbumForm";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function NewPhoto() {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const addPhotoHandler = async (photo) => {
    try {
      await axiosPrivate.post(`/album`, photo, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  return <AlbumForm addItem={addPhotoHandler} title={"Add Photo"} />;
}
