import React, { useState } from "react";
import styled from "styled-components";
import UseTheme from "../hooks/UseTheme";

const Container = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
  text-align: left;
  padding-left: 5px;
  &.dark {
    color: white;
  }
`;

const Input = styled.input`
  margin-bottom: 5px;
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid #eee;
  font-size: 16px;
  color: #fc7676;
`;

const Button = styled.button`
  border: 1px solid #eee;
  padding: 4px;
  margin-top: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default function EditForm() {
  const { saveEditedBook, mode, chosenBook } = UseTheme();
  const [title, setTitle] = useState(chosenBook.title);
  const [author, setAuthor] = useState(chosenBook.author);
  const id = chosenBook.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, id };
    saveEditedBook(book);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h2 className={`${mode}`}>Edit "{chosenBook.title}"</h2>
      <Label>Title</Label>
      <Input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder={chosenBook.title}
        value={title}
      />
      <Label>Author</Label>
      <Input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder={chosenBook.author}
        value={author}
      />
      <Button type="submit">Edit Save</Button>
    </Container>
  );
}
