import "./styles.css";

export default function BarradeBusca() {
  return (
    <form id="catalogo-barra-pesquisa" className="barra-pesquisa">
      <button
        type="submit"
        id="devcom-btn-submit"
        className="devcom-btn-pesquisa"
      >
        {" "}
        🔎︎{" "}
      </button>
      <input
        type="text"
        className="devcom-search-input"
        placeholder="Nome do Produto"
      />
      <button
        type="reset"
        id="devcom-btn-reset"
        className="devcom-btn-pesquisa"
      >
        {" "}
        🗙{" "}
      </button>
    </form>
  );
}
