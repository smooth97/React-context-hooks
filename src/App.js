import React from "react";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
