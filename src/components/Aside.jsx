import PropTypes from "prop-types";

export default function Aside({ booksOnReadingList, books, handleRemoveBook }) {
  return (
    <aside id="aside">
      <h1>Lista de lectura</h1>
      <ul>
        {booksOnReadingList.map((title, index) => {
          const book = books.find((item) => item.book.title === title);
          if (book) {
            return (
              <li key={index}>
                <img src={book.book.cover} alt={book.book.title} />
                <span onClick={() => handleRemoveBook(title)}>✖</span>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </aside>
  );
}

Aside.propTypes = {
  booksOnReadingList: PropTypes.array,
  books: PropTypes.array,
  handleRemoveBook: PropTypes.func,
};
