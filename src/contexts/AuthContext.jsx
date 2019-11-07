import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [authenticated, setAuthenticated] = useState(false);
  const toggleAuth = () => {
    setAuthenticated(!authenticated);
  }
  return (
    <AuthContext.Provider value={[authenticated, toggleAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
