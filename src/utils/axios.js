import axios from "axios";
import { Navigate } from "react-router-dom";
// Alter defaults after instance has been created
const authAxios = axios.create({
  baseURL:"http://192.168.1.12:3012/api",
});

// Add a request interceptor
authAxios.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("eventi") !== undefined &&
      localStorage.getItem("eventi") !== null
        ? localStorage.getItem("eventi")
        : "";
   
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//Add a response interceptor

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("eventi");
      localStorage.removeItem("eventi-user");
      <Navigate exact to="/" />;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default authAxios;
