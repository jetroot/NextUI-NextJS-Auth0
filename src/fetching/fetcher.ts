const BASE_API = "https://api.spacexdata.com/v3";
export const fetcher = (url: string) =>
  fetch(`${BASE_API}${url}`).then((res) => res.json());
