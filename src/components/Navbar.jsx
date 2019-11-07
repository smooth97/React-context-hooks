import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const [lightTheme, light, dark] = useContext(ThemeContext);
  const theme = lightTheme ? light : dark;
  const [authenticated, toggleAuth] = useContext(AuthContext);

  return (
    <nav style={{ background: theme.ui, color: theme.syntex }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {authenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
