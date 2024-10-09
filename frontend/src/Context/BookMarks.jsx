import React, { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

const BookMarks = ({children}) => {
  
  const [bookMarkkk, setbookMark] = useState([]);
  const getLocatData = () => {
    const getData = localStorage.getItem("bookmarkkkk");
    if (getData) {
      let cart = JSON.parse(getData);
      setbookMark(cart);
      localStorage.setItem("bookmarkkkk",JSON.stringify(cart));
    }
  };
  useEffect(() => {
    getLocatData();
  }, []);
  return (
    <BookmarkContext.Provider value={[bookMarkkk, setbookMark]}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookMark = () => useContext(BookmarkContext);

export default BookMarks;
