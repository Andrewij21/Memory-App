import useAuth from "./useAuth";
import axios from "../api/axios";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", { withCredentials: true });
      console.log({ response });
      setAuth((prev) => {
        console.log({ prevToken: prev.accessToken });
        console.log({ newToken: response.data.data.accessToken });
        const accessToken = response.data.data.accessToken;
        const roles = response.data.data.roles;
        return { ...prev, accessToken, roles };
      });
      return response.data.data.accessToken;
    } catch (error) {
      console.error(error);
    }
  };

  return refresh;
};

export default useRefreshToken;
