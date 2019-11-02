import React from "react";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
