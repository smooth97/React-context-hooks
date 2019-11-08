import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <nav>
      <h1>Reading List</h1>
      <p>
        Currently you have <b>{books.length}</b> books to get through...
      </p>
    </nav>
  );
};

export default Navbar;
