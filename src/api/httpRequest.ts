import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8000";

export const getHotelsData = () =>
  axios.get(`${BASE_URL}/hotels`).then((response) => response.data);

export const getHotelList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${BASE_URL}/hotels?_page=${pageParam}&_limit=10`
  );
  return {
    result: data,
    nextPage: pageParam + 1,
  };
};

export const getHotelSearchData =
  (keyword: string, peopleNum: number) =>
  async ({ pageParam = 0 }) => {
    const { data } = await axios.get(
      `${BASE_URL}/hotels?q=${keyword}&_occupancyMax=${peopleNum}&_page=${pageParam}&_limit=10`
    );
    return {
      result: data,
      nextPage: pageParam + 1,
    };
  };
