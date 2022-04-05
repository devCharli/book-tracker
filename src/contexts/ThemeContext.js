import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "ADD_BOOK":
      return { ...state, bookList: [...state.bookList, action.payload] };
    case "DELETE_BOOK":
      return {
        ...state,
        bookList: [...state.bookList].filter(
          (book) => book.id !== action.payload
        ),
        isEditing: false,
      };
    case "IS_EDITING":
      return {
        ...state,
        isEditing: action.payload,
      };
    case "CHOOSE_BOOK":
      return {
        ...state,
        chosenBook: action.payload,
      };
    case "EDIT_BOOK":
      const updateBook = action.payload;
      const updateBooks = state.bookList.map((book) => {
        if (book.id === updateBook.id) {
          return updateBook;
        }
        return book;
      });

      return {
        ...state,
        bookList: updateBooks,
        isEditing: false,
      };
    default:
      return state;
  }
}

const getBookList = () => {
  const savedList = localStorage.getItem("booklist");
  if (savedList) {
    return JSON.parse(savedList);
  } else {
    return [];
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    bookList: getBookList(),
    isEditing: false,
    chosenBook: null,
    mode: "dark",
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  const addBook = (book) => {
    dispatch({ type: "ADD_BOOK", payload: book });
  };

  const deleteBook = (id) => {
    dispatch({ type: "DELETE_BOOK", payload: id });
  };

  const toggleEditing = (book) => {
    dispatch({ type: "IS_EDITING", payload: true });
    dispatch({ type: "CHOOSE_BOOK", payload: book });
  };

  const saveEditedBook = (book) => {
    dispatch({ type: "EDIT_BOOK", payload: book });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        changeMode,
        addBook,
        deleteBook,
        toggleEditing,
        saveEditedBook,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
