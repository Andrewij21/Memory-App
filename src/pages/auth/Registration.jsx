import AuthForm from "../../components/auth/AuthForm";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();

  const handleRegister = async (payload) => {
    try {
      await axios.post("/register", payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.log({ error });
      return error.response.status;
    }
  };
  return <AuthForm type="register" title="sign up" handler={handleRegister} />;
};

export default Registration;
