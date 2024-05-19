import "./styles.css";
import HeaderClient from "../../Components/HeaderClient";
import CatalogCard from "../../Components/CatalogCard";

export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="catalogo-section" className="devcom-container">
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

          <div
            id="products-container"
            className="devcom-mb20 devcom-mt20 devcom-catalog-cards"
          >
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>

            <div id="carregar-mais" className="devcom-btn devcom-btn-white">
                CARREGAR MAIS
            </div>
        </section>
      </main>
    </>
  );
}
