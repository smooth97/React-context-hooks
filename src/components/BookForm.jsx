import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleChange = e => {
    setTitle(e.target.value);
  };

  const authorChange = e => {
    setAuthor(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="book title"
        required
        onChange={titleChange}
      />
      <input
        type="text"
        value={author}
        placeholder="book author"
        required
        onChange={authorChange}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
