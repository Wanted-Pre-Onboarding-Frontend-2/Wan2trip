import { getHotelsData, getHotelSearchData } from "./httpRequest";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetHotels = () => {
  return useQuery(["hotels"], () => getHotelsData());
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
