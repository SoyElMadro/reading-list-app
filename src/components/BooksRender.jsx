import PropTypes from "prop-types";

export default function BooksRender({
  books,
  quantityFilter,
  handleBookClick,
  booksOnReadingList,
  genreFilter,
}) {
  return (
    <ul>
      {books
        .filter((book) => book.book.pages <= quantityFilter)
        .filter(
          (book) => genreFilter === "Todos" || book.book.genre === genreFilter
        )
        .map((book, index) => (
          <li key={index}>
            <img
              src={book.book.cover}
              alt={book.book.title}
              onClick={() => handleBookClick(book.book)}
              className={
                booksOnReadingList.includes(book.book.title) ? "dark" : ""
              }
            />
          </li>
        ))}
    </ul>
  );
}

BooksRender.propTypes = {
  books: PropTypes.array,
  quantityFilter: PropTypes.number,
  handleBookClick: PropTypes.func,
  genreFilter: PropTypes.string,
  booksOnReadingList: PropTypes.array,
};
