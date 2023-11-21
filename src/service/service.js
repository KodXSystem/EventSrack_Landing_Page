import authAxios from "../utils/axios";

export const getLocation = () => {
  return authAxios.get("/landingPage/locations");
};

export const getCategory = () => {
  return authAxios.get("/category");
};
export const getSearch = (data) => {
  return authAxios.post("/landingPage/search",data);
};

export const getEvents = (data) => {
  return authAxios.get("/event", data);
}
export const buyTicket = (data,searchData) => {
  return authAxios.post("/landingPage/buyTicket", data,searchData);
}