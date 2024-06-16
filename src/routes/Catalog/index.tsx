import "./styles.css";
import HeaderClient from "../../Components/HeaderClient";
import CatalogCard from "../../Components/CatalogCard";
import BarradeBusca from "../../Components/BarradeBusca";
import NextPageButton from "../../Components/Buttons/NextPageButton";

export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="catalogo-section" className="devcom-container">
          <BarradeBusca />

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

          <NextPageButton />
        </section>
      </main>
    </>
  );
}
