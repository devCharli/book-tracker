import styled from "styled-components";
import UseTheme from "../hooks/UseTheme";

const ListContainer = styled.div`
  position: relative;
`;
const List = styled.li`
  text-align: left;
  padding: 5px 0 5px 10px;
  margin-bottom: 10px;
  border: 0.5px solid #eee;
  border-radius: 6px;
  list-style-type: none;
  font-size: 16px;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: -2px;
  cursor: pointer;
  padding: 5px;
  border: 0;
  background-color: transparent;
`;

const Button = styled.button`
  color: red;
  background-color: transparent;
  padding: 3px 6px;
  border: 0;
  cursor: pointer;
  &.dark {
    color: white;
  }
`;

export default function Book({ book }) {
  const { mode, deleteBook, toggleEditing, isEditing } = UseTheme();

  return (
    <ListContainer>
      <List>
        {book.title} by {book.author}
      </List>
      <Buttons>
        {isEditing ? (
          <></>
        ) : (
          <Button className={`${mode}`} onClick={() => toggleEditing(book)}>
            Edit
          </Button>
        )}
        <Button className={`${mode}`} onClick={() => deleteBook(book.id)}>
          Delete
        </Button>
      </Buttons>
    </ListContainer>
  );
}
