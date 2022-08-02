import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8000";

export const getHotelsData = () =>
  axios.get(`${BASE_URL}/hotels`).then((response) => response.data);

export const getHotelSearchData = async (
  keyword: string,
  peopleNum: number
) => {
  const response = await axios.get(
    `${BASE_URL}/hotels?q=${keyword}&occupancyMax_gte=${peopleNum}`
  );
  return response.data;
};
