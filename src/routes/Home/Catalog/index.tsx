import "./styles.css";
import CatalogCard from "../../../Components/CatalogCard";
import BarradeBusca from "../../../Components/BarradeBusca";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
//import { CatalogProductDTO } from "../../../Models/CatalogProduct";
import * as productService from "../../../services/product-service"


export default function Catalog() {
  return (
    <>
      <main>
        <section id="catalogo-section" className="devcom-container">
          <BarradeBusca />

          <div
            id="products-container"
            className="devcom-mb20 devcom-mt20 devcom-catalog-cards"
          >
           {
            productService.findAll().map(product => <CatalogCard key={product.id} catalogproductProp={product}/>)
           }

          </div>

          <NextPageButton />
        </section>
      </main>
    </>
  );
}
