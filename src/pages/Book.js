import React from "react";
import "./Book.css";

export default function Book({ book }) {
  return (
    <li>
      {book.title} - {book.author}
    </li>
  );
}
