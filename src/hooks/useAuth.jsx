import authContext from "../store/AuthContext";
import { useContext } from "react";
const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
