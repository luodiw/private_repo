// theme.js

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("day");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkMode) {
        setTheme("orb");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "orb" ? "shine" : "orb";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("shine");
    document.documentElement.classList.toggle("orb");
  };

  return [theme, toggleTheme];
};

export default useTheme;
