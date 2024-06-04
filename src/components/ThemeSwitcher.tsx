"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <Button onClick={() => setTheme("light")}>
        <MdLightMode size={18} />
      </Button>
      <Button onClick={() => setTheme("dark")}>
        <MdDarkMode size={19} />
      </Button>
    </div>
  );
}
