import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./useAuth";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://study-hive-omega.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {

        if (error.response.status === 401 || error.response.status === 403) {
            logOut()
            navigate('/login')

        }
      }
    );
  }, [logOut, navigate])
  return axiosInstance
};
export default useAxiosSecure;
