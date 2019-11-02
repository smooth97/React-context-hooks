import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = props => {
  const [lightTheme, setLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee"
  });
  const [dark, setDark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555"
  });
  return (
    <ThemeContext.Provider value={[lightTheme, setLightTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
