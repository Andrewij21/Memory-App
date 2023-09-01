import axios from "../api/axios";
import useAuth from "./useAuth";
const useLogout = () => {
  const { setAuth } = useAuth();
  const logout = async () => {
    try {
      await axios.delete("/auth/logout", { withCredentials: true });
      setAuth({});
      console.log("anda logout");
    } catch (error) {
      console.error(error);
    }
  };
  return logout;
};

export default useLogout;
