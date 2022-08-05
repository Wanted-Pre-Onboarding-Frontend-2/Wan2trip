import { getHotelsData, getHotelList, getHotelSearchData } from "./httpRequest";
import { useMutation, useQuery, useInfiniteQuery } from "@tanstack/react-query";

export const useGetHotels = () => {
  return useQuery(["hotels"], () => getHotelsData());
};

export const useGetHotelList = () => {
  return useInfiniteQuery(["infiniteHotelList"], getHotelList, {
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  });
};

export const useSearchResults = (keyword: string, peopleNum: number) => {
  return useQuery(
    ["hotels", keyword, peopleNum],
    () => getHotelSearchData(keyword, peopleNum),
    {
      enabled: !!keyword,
    }
  );
};
