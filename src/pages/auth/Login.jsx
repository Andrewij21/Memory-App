import AuthForm from "../../components/auth/AuthForm";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();
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
    } catch (error) {
      console.log({ error: error.toString() });
      alert(error.response.data.message);
    }
  };
  return <AuthForm type="login" handler={handleLogin} title="sign in" />;
};

export default Login;
