import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const [lightTheme, light, dark, toggle] = useContext(ThemeContext);
  const [toggleTheme, setToggleTheme] = useState(lightTheme);
  return <button onClick={toggle}>Toggle the theme</button>;
};

export default ThemeToggle;
