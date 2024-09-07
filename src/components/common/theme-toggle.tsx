"use client";

import { MoonIcon, SunDimIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setDarkMode(localTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {darkMode ? (
        <button onClick={() => setDarkMode(false)} className="rounded-md bg-gray-800 p-2 text-white">
          <SunDimIcon />
        </button>
      ) : (
        <button onClick={() => setDarkMode(true)} className="rounded-md bg-gray-200 p-2 text-gray-800">
          <MoonIcon />
        </button>
      )}
    </div>
  );
}
