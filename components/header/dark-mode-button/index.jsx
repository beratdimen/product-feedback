"use client";

import { DarkModeIcon, LightModeIcon } from "@/helpers/icons";
import { useEffect, useState } from "react";
import "../style.css";
import { useTheme } from "next-themes";
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button className="modeChange" onClick={changeTheme}>
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
