"use client";

import { TokenProvider } from "@/providers/TokenProvider";
import Home from "./home/page";

export default function App() {
  return (
    <TokenProvider>
      <Home />
    </TokenProvider>
  );
}
