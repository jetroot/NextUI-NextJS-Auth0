"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Profile from "@/app/profile/page";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="bg-slate-50 px-2 dark:bg-black dark:text-white">
      <ul className="flex items-center p-2">
        <li className="w-1/2">
          <Link href={`/`}>
            <span className="font-bold">Logo</span>
          </Link>
        </li>

        <li className="flex-1">
          <Link href={`/home`}>
            <span>Home</span>
          </Link>
        </li>

        {!user && (
          <li className="flex-1">
            <Link href={`/api/auth/login`}>
              <span>Log in</span>
            </Link>
          </li>
        )}

        {user && (
          <li className="flex-1">
            <Link href={`/api/auth/logout`}>
              <span>Log out</span>
            </Link>
          </li>
        )}

        {user && (
          <li className="flex-1">
            <Profile />
          </li>
        )}

        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
