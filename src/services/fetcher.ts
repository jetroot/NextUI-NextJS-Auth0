import axios from "axios";
import toast from "react-hot-toast";

export const createAxiosInstance = (baseUrl = "http://localhost:3001/v1") => {
  return axios.create({
    baseURL: baseUrl,
    withCredentials: true,
  });
};

const fetcher = async (url: string, baseUrl?: string) => {
  const axiosInstance = createAxiosInstance(baseUrl);

  return axiosInstance
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      // throw err;

      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
      }
      // throw err;
      return;
    });
};

export default fetcher;
