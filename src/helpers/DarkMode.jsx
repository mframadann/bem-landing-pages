import { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.theme
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default Darkmode;
