import axios from "axios";

export const axiosInstane = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});

const fetcher = ({
  url,
  method,
  data = null,
}: {
  url: string;
  method: string;
  data: any;
}) => axiosInstane({ url, method, data }).then((res) => res.data);
export default fetcher;
