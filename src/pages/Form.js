import React, { useState } from "react";
import UseTheme from "../hooks/UseTheme";

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = UseTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author };
    setTitle("");
    setAuthor("");
    addBook(book);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <label>Author</label>
      <input type="text" onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
