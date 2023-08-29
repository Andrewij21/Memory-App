import { useNavigate } from "react-router-dom";
import AlbumForm from "../components/albums/AlbumForm";

export default function NewPhoto() {
  const navigate = useNavigate();
  const addPhotoHandler = (photo) => {
    console.log(photo);
    fetch("http://localhost:3000/album", {
      method: "POST",
      body: JSON.stringify(photo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  };

  return <AlbumForm addItem={addPhotoHandler} title={"Add Photo"} />;
}
