import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  return (
    <>
      {auth.roles?.find((role) => allowedRoles.includes(role)) ? (
        <Outlet />
      ) : auth.accessToken ? (
        <Navigate to="/unauthorized" replace />
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

RequireAuth.propTypes = {
  allowedRoles: PropTypes.array,
};

export default RequireAuth;
