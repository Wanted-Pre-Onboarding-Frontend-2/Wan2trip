import { getHotelsData, getHotelList, getHotelSearchData } from "./httpRequest";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8000";

export const useGetHotels = () => {
  return useQuery(["hotels"], () => getHotelsData());
};

export const useGetHotelList = () => {
  return useInfiniteQuery(
    ["infiniteHotelList"],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.get(
        `${BASE_URL}/hotels?_page=${pageParam}&_limit=10`
      );
      return {
        result: data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    }
  );
};

export const useSearchResults = (keyword: string, peopleNum: number) => {
  return useInfiniteQuery(
    ["infiniteHotelSearchList"],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.get(
        `${BASE_URL}/hotels?_page=${pageParam}&_limit=10&q=${keyword}&occupancyMax_gte=${peopleNum}`
      );
      return {
        result: data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    }
  );
};
