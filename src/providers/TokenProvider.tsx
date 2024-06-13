"use client";

import { useToken } from "@/services/queries";
import { ReactNode, createContext, useContext } from "react";

interface TokenContextProps {
  accessToken: string | undefined;
}

const TokenContext = createContext<TokenContextProps | undefined>(undefined);

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useToken("http://localhost:3000");

  if (isLoading) return;

  return (
    <TokenContext.Provider value={{ accessToken: data }}>
      {children}
    </TokenContext.Provider>
  );
};

const useTokenContext = () => {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error("useTokenContext must be used within TokenProvider");
  }

  return context;
};

export { TokenProvider, useTokenContext };
