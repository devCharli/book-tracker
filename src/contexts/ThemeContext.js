import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "ADD_BOOK":
      return { ...state, bookList: [...state.bookList, action.payload] };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [bookList, setBookList] = useState([
    { title: "gone with wind", author: "Sharlot" },
    { title: "pachinko", author: "Kim" },
    { title: "Wahle", author: "천명관" },
  ]);
  const [state, dispatch] = useReducer(themeReducer, {
    color: "gray",
    bookList,
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const addBook = (book) => {
    dispatch({ type: "ADD_BOOK", payload: book });
    // let copy = [...bookList];
    // copy.push(book);
    // setBookList(copy);
    // console.log(bookList);
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, addBook }}>
      {children}
    </ThemeContext.Provider>
  );
}
