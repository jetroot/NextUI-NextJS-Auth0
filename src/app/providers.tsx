"use client";

import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="w-full bg-white dark:bg-black">
          <Navbar />
          <div className="m-2 flex justify-center">
            <div className="container">{children}</div>
          </div>
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
