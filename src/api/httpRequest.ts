import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8000";

export const getHotelsData = () =>
  axios.get(`${BASE_URL}/hotels`).then((response) => response.data);