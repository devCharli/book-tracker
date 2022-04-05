import React, { useEffect } from "react";
import UseTheme from "../hooks/UseTheme";
import Book from "./Book";
import Form from "./Form";
import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  margin: 0 auto;
  align-items: start;
  // width: 960px;
  padding: 50px;
  &.dark {
    background-color: #67595e;
    color: white;
  }
`;

const UL = styled.ul`
  padding-left: 0;
`;

export default function Home() {
  const { bookList, mode } = UseTheme();
  useEffect(() => {
    localStorage.setItem("booklist", JSON.stringify(bookList));
  }, [bookList]);

  return (
    <Section className={`${mode}`}>
      <Form />
      <div>
        <h2>Book List</h2>
        <UL>
          {bookList.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </UL>
      </div>
    </Section>
  );
}
