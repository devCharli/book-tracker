import React from "react";
import UseTheme from "../hooks/UseTheme";
import Book from "./Book";
import Form from "./Form";

export default function BookList() {
  const { bookList } = UseTheme();
  return (
    <div>
      <h2>BookList</h2>
      <ul>
        {bookList.map((book) => (
          <Book key={book.title} book={book} />
        ))}
      </ul>
      <Form />
    </div>
  );
}
