import PropTypes from "prop-types";

export default function Filters({
  quantityFilter,
  handleGenreFilter,
  handleQuantityFilter,
}) {
  return (
    <div className="filtros">
      <div className="cantidad">
        <h2>Filtrar por páginas</h2>
        <input
          type="range"
          value={quantityFilter}
          min={1}
          max={1200}
          onChange={handleQuantityFilter}
        />
      </div>
      <div className="genero">
        <h2>Filtrar por género</h2>
        <select onChange={handleGenreFilter}>
          <option value="Todos" defaultValue={true}>
            Todos
          </option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
    </div>
  );
}

Filters.propTypes = {
  quantityFilter: PropTypes.number,
  handleGenreFilter: PropTypes.func,
  handleQuantityFilter: PropTypes.func,
};
