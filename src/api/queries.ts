import { getHotelsData } from "./httpRequest";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetHotels = () => {
  return useQuery(["hotels"], () => getHotelsData());
};
