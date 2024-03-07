import PropTypes from "prop-types";
import Footer from "./Footer";

export default function SelectedBook({
  selectedBook,
  setSelectedBook,
  handleAmountRLClick,
  booksOnReadingList,
}) {
  return (
    <>
      {selectedBook && (
        <section className="selectedBook">
          <h2>{selectedBook.title}</h2>
          <span onClick={() => setSelectedBook(null)}>❌</span>
          <p>
            <strong>Páginas:</strong> {selectedBook.pages}
          </p>
          <p>
            <strong>Género:</strong> {selectedBook.genre}
          </p>
          <p>
            <strong>Sinopsis:</strong> {selectedBook.synopsis}
          </p>
          <p>
            <strong>Año:</strong> {selectedBook.year}
          </p>
          <p>
            <strong>Autor:</strong> {selectedBook.author.name}
          </p>
          <p>
            <strong>Otros libros del autor:</strong>{" "}
            {selectedBook.author.otherBooks.join(", ")}
          </p>
          <Footer
            selectedBook={selectedBook}
            booksOnReadingList={booksOnReadingList}
            handleAmountRLClick={handleAmountRLClick}
          />
        </section>
      )}
    </>
  );
}

SelectedBook.propTypes = {
  selectedBook: PropTypes.object,
  setSelectedBook: PropTypes.any,
  handleAmountRLClick: PropTypes.func,
  booksOnReadingList: PropTypes.array,
};
