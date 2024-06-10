import useSWR from "swr";

export const useLaunches = () => {
  return useSWR<any>("/launches");
};
