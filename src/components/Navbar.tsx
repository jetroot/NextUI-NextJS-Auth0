"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Profile from "@/app/profile/page";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

const MyNavbar = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const logout = () => {
    router.push("/api/auth/logout");
  };

  return (
    <Navbar className="w-full" maxWidth="full">
      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold dark:text-white">ACME</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/home" className="dark:text-white">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {user && (
          <Dropdown className="dark:text-slate-300" placement="bottom-end">
            <DropdownTrigger>
              <Profile />
            </DropdownTrigger>

            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-normal">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                <ThemeSwitcher />
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={logout}>
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}

        {!user && !isLoading && (
          <NavbarItem>
            <Link href={`/api/auth/login`} className="dark:text-white">
              Log in
            </Link>
          </NavbarItem>
        )}

        {isLoading && (
          <AiOutlineLoading className="animate-spin dark:text-slate-100" />
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
