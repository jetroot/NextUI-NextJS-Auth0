"use client";

import fetcher from "@/services/fetcher";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

const FetcherProvider = ({ children }: { children: ReactNode }) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default FetcherProvider;
