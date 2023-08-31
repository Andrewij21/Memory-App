import AuthForm from "../../components/auth/AuthForm";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "/auth",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log({ response });
      const roles = response.data.data.roles;
      const accessToken = response.data.data.accessToken;
      setAuth({ email, password, roles, accessToken });
      navigate("/");
    } catch (error) {
      console.log({ error: error.toString() });
      alert(error.response.data.message);
    }
  };
  return <AuthForm type="login" handler={handleLogin} title="sign in" />;
};

export default Login;
