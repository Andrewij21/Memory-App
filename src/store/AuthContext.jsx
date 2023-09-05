import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [presist, setPresist] = useState(
    JSON.parse(localStorage.getItem("presist")) || false
  );
  return (
    <AuthContext.Provider value={{ auth, setAuth, presist, setPresist }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
