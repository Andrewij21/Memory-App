import { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";
import axios from "../../api/axios";
const Login = () => {
  useEffect(() => {
    axios.post();
  }, []);
  return <AuthForm type="login" />;
};

export default Login;
