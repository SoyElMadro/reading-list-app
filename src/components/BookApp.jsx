import { useState } from "react";
import PropTypes from "prop-types";
import SelectedBook from "./SelectedBook.jsx";
import Filters from "./Filters.jsx";
import BooksRender from "./BooksRender.jsx";
import Header from "./Header.jsx";

export default function BookApp({
  selectedBook,
  setSelectedBook,
  booksOnReadingList,
  setBooksOnReadingList,
  setAmountOnReadingList,
  setIsReadingListOpen,
  isReadingListOpen,
  books,
  amountOnReadingList,
}) {
  const [quantityFilter, setQuantityFilter] = useState(1200);
  const [genreFilter, setGenreFilter] = useState("Todos");

  const handleGenreFilter = (event) => {
    setGenreFilter(event.target.value);
  };

  const handleQuantityFilter = (event) => {
    setQuantityFilter(parseInt(event.target.value));
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleAmountRLClick = (event) => {
    const tituloLibro = selectedBook.title;
    if (booksOnReadingList.includes(tituloLibro)) {
      setBooksOnReadingList(
        booksOnReadingList.filter((book) => book !== tituloLibro)
      );
      setAmountOnReadingList((prevAmount) => prevAmount - 1);
      event.target.textContent = "Poner en lista de lectura";
    } else {
      setBooksOnReadingList([...booksOnReadingList, tituloLibro]);
      setAmountOnReadingList((prevAmount) => prevAmount + 1);
      event.target.textContent = "Sacar de la lista de lectura";
    }
  };

  const handleReadingListClick = (event) => {
    event.target.textContent == "Abrir"
      ? (event.target.textContent = "Cerrar")
      : (event.target.textContent = "Abrir");
    setIsReadingListOpen(!isReadingListOpen);
  };

  return (
    <div className="book-app">
      <Header
        books={books}
        amountOnReadingList={amountOnReadingList}
        handleReadingListClick={handleReadingListClick}
      />
      <Filters
        quantityFilter={quantityFilter}
        handleGenreFilter={handleGenreFilter}
        handleQuantityFilter={handleQuantityFilter}
      />
      <main className="libros">
        <BooksRender
          books={books}
          quantityFilter={quantityFilter}
          handleBookClick={handleBookClick}
          booksOnReadingList={booksOnReadingList}
          genreFilter={genreFilter}
        />
        <SelectedBook
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          handleAmountRLClick={handleAmountRLClick}
          booksOnReadingList={booksOnReadingList}
        />
      </main>
    </div>
  );
}

BookApp.propTypes = {
  selectedBook: PropTypes.string,
  setSelectedBook: PropTypes.func,
  booksOnReadingList: PropTypes.array,
  setBooksOnReadingList: PropTypes.func,
  setAmountOnReadingList: PropTypes.func,
  setIsReadingListOpen: PropTypes.func,
  isReadingListOpen: PropTypes.bool,
  books: PropTypes.array,
  amountOnReadingList: PropTypes.number,
};
