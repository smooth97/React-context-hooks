import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={[authenticated]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
