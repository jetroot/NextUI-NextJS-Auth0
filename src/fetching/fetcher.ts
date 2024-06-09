const BASE_API = "https://api.escuelajs.co/api/v1";
export const fetcher = (url: string) =>
  fetch(`${BASE_API}${url}`).then((res) => res.json());
