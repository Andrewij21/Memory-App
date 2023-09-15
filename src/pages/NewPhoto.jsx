import { useNavigate } from "react-router-dom";
import AlbumForm from "../components/albums/AlbumForm";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function NewPhoto() {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const addPhotoHandler = async (photo) => {
    try {
      const formData = new FormData();
      formData.append("name", photo.name);
      formData.append("image", photo.image);
      formData.append("description", photo.description);
      formData.append("date", photo.date);
      formData.append("user", photo.user);

      await axiosPrivate.post(`/album`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("data di tambah");
      navigate("/");
    } catch (error) {
      console.log({ error });
    }
  };

  return <AlbumForm addItem={addPhotoHandler} title={"Add Photo"} />;
}
