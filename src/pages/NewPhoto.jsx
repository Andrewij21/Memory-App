import { useNavigate } from "react-router-dom";
import AlbumForm from "../components/albums/AlbumForm";

export default function NewPhoto() {
  const navigate = useNavigate();
  const addPhotoHandler = (photo) => {
    console.log(photo);
    fetch("https://react-album-1a909-default-rtdb.firebaseio.com/albums.json", {
      method: "POST",
      body: JSON.stringify(photo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  };

  return <AlbumForm addPhoto={addPhotoHandler} />;
}
