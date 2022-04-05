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
`;

const Input = styled.input`
  margin-bottom: 5px;
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid #eee;
  font-size: 16px;
`;

const Button = styled.button`
  border: 1px solid #eee;
  padding: 4px;
  margin-top: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = UseTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random() * 1000;
    const book = { title, author, id };
    addBook(book);
    setTitle("");
    setAuthor("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <Label>Title</Label>
      <Input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a book title..."
        value={title}
      />
      <Label>Author</Label>
      <Input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author name..."
        value={author}
      />
      <Button type="submit">Submit</Button>
    </Container>
  );
}
