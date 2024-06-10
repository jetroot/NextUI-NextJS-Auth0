import axios from "axios";

export const axiosInstane = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});

const fetcher = (url: string) => axiosInstane.get(url).then((res) => res.data);
export default fetcher;
