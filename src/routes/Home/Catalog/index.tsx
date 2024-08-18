import "./styles.css";
import CatalogCard from "../../../Components/CatalogCard";
import BarradeBusca from "../../../Components/BarradeBusca";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
import { useEffect, useState } from "react";
import * as ProductService from "../../../services/product-service";
import { ProductDTO } from "../../../Models/product";


export default function Catalog() {


  const [catalog_product_list, setCatalogList] = useState<ProductDTO[]>([]);

  useEffect(() => {
    ProductService.findAll()
    .then(response => {
      setCatalogList(response.data.content);
    });
  }, []);

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
            catalog_product_list.map(product => <CatalogCard key={product.id} catalogproductProp={product}/>)
           }

          </div>

          <NextPageButton />
        </section>
      </main>
    </>
  );
}
