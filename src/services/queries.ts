import useSWR from "swr";
import fetcher from "./fetcher";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useLaunches = () => {
  const { user, isLoading } = useUser();
  const shouldFetch = !isLoading && user !== undefined;

  return useSWR<any>(shouldFetch ? "/launches" : null);
};

export const useToken = (baseUrl?: string, uri = "/api/token") => {
  const { user, isLoading } = useUser();
  const shouldFetch = !isLoading && user !== undefined;

  const url = baseUrl ? `${baseUrl}${uri}` : uri;
  return useSWR<any>(shouldFetch ? url : null, () => fetcher(url, baseUrl));
};
