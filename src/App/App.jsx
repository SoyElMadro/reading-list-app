import { useState, useEffect } from "react";
import "./App.css";
import booksData from "../utils/books.json";
import Aside from "../components/Aside.jsx";
import BookApp from "../components/BookApp.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [booksOnReadingList, setBooksOnReadingList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isReadingListOpen, setIsReadingListOpen] = useState(false);
  const [amountOnReadingList, setAmountOnReadingList] = useState(0);

  const handleRemoveBook = (title) => {
    setBooksOnReadingList((prevList) =>
      prevList.filter((bookTitle) => bookTitle !== title)
    );
    setAmountOnReadingList((prevAmount) => prevAmount - 1);
  };

  useEffect(() => {
    const aside = document.getElementById("aside");
    isReadingListOpen
      ? (aside.style.display = "block")
      : (aside.style.display = "none");
  }, [isReadingListOpen]);

  useEffect(() => {
    setBooks(booksData.library);
  }, []);

  return (
    <main id="reading-list">
      <BookApp
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        booksOnReadingList={booksOnReadingList}
        setBooksOnReadingList={setBooksOnReadingList}
        setAmountOnReadingList={setAmountOnReadingList}
        setIsReadingListOpen={setIsReadingListOpen}
        isReadingListOpen={isReadingListOpen}
        books={books}
        amountOnReadingList={amountOnReadingList}
      />
      <Aside
        booksOnReadingList={booksOnReadingList}
        books={books}
        handleRemoveBook={handleRemoveBook}
      />
    </main>
  );
}

export default App;
