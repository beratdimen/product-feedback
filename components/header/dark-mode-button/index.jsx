"use client";

import { DarkModeIcon, LightModeIcon } from "@/helpers/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    console.log("Theme changed to:", newTheme);
  };

  return (
    <button onClick={changeTheme}>
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
