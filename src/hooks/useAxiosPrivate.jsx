import useAuth from "./useAuth";
import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";
import { useEffect } from "react";

const useAxiosPrivate = () => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const request = axiosPrivate.interceptors.request.use(
      (response) => {
        if (!response.headers["Authorization"]) {
          response.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return response;
      },
      (err) => Promise.reject(err)
    );
    const response = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err.config;
        if (err.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          // prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          prevRequest.headers = {
            ...prevRequest.headers,
            Authorization: `Bearer ${newAccessToken}`,
            // "Content-Type": "multipart/form-data",
          };
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.use(request);
      axiosPrivate.interceptors.response.use(response);
    };
  }, [auth, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
