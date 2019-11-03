import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [lightTheme, light, dark] = useContext(ThemeContext);
  const theme = lightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntex }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
