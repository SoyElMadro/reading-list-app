import PropTypes from "prop-types";

export default function Header({
  books,
  amountOnReadingList,
  handleReadingListClick,
}) {
  return (
    <>
      <h1>{books.length - amountOnReadingList} libros disponibles</h1>
      <h3 style={{ display: "inline-block", marginRight: "16px" }}>
        {amountOnReadingList} en la lista de lectura
      </h3>{" "}
      <button
        style={{
          display: "inline-block",
          fontSize: "1.1em",
          fontWeight: "600",
        }}
        onClick={handleReadingListClick}
      >
        Abrir
      </button>
    </>
  );
}

Header.propTypes = {
  books: PropTypes.array,
  amountOnReadingList: PropTypes.number,
  handleReadingListClick: PropTypes.func,
};
