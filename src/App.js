import React from "react";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import SongList from "./components/SongList.jsx";
import BookContextProvider from "./contexts/BookContext.jsx";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <BookContextProvider>
        <BookList />
        </BookContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
