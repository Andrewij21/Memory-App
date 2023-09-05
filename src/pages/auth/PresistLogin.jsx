import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";

const PresistLogin = () => {
  const { auth, presist } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !auth?.accessToken && presist ? verifyRefreshToken() : setIsLoading(false);
    // !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    console.log("masuk berapkali");
    return () => (isMounted = false);
  }, [auth, presist, refresh]);

  return (
    <>{!presist ? <Outlet /> : isLoading ? <p>loading...</p> : <Outlet />}</>
    // <>{!isLoading ? <Outlet /> : <p>loading...</p>}</>
  );
};

export default PresistLogin;
