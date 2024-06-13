import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import FetcherProvider from "@/providers/FetcherProvider";
import { Toaster } from "react-hot-toast";
import { TokenProvider } from "@/providers/TokenProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "dark:bg-[#27272A] bg-[#27272A]",
            style: {
              color: "#A1A1AA",
            },
          }}
        />
        <UserProvider>
          <TokenProvider>
            <FetcherProvider>
              <Providers>{children}</Providers>
            </FetcherProvider>
          </TokenProvider>
        </UserProvider>
      </body>
    </html>
  );
}
