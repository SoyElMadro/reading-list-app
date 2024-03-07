import PropTypes from "prop-types";

export default function Footer({
  selectedBook,
  booksOnReadingList,
  handleAmountRLClick,
}) {
  return (
    <footer className="end">
      <img src={selectedBook.cover} alt={selectedBook.title} />
      <button onClick={handleAmountRLClick}>
        {booksOnReadingList.includes(selectedBook.title)
          ? "Sacar de la lista de lectura"
          : "Poner en lista de lectura"}
      </button>
    </footer>
  );
}

Footer.propTypes = {
  selectedBook: PropTypes.object,
  setSelectedBook: PropTypes.any,
  handleAmountRLClick: PropTypes.func,
  booksOnReadingList: PropTypes.array,
};
