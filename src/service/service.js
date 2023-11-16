import authAxios from "src/utils/axios";

export const getProducts = (data) => {
  return authAxios.get("/landingPage/locations", { data });
};


 