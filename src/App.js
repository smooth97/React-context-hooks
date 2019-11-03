import React from "react";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
