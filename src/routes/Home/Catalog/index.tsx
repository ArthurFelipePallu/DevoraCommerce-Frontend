import "./styles.css";
import CatalogCard from "../../../Components/CatalogCard";
import BarradeBusca from "../../../Components/BarradeBusca";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
import { useEffect, useState } from "react";
import * as ProductService from "../../../services/product-service";
import { ProductDTO } from "../../../Models/product";
import { CategoryDTO } from "../../../Models/category";


export default function Catalog() {


  const [catalog_product_list, setCatalogList] = useState<ProductDTO[]>([]);

  const objTeste : CategoryDTO = {
    id: 8,
    name: "Gamer",


  }



  useEffect(() => {
    // aula LocalStorage
    
    //localStorage.setItem("myCategory",JSON.stringify(objTeste))

    // const objstring = localStorage.getItem("myCategory");
    // const obj = JSON.parse(objstring || "");  
    // console.log(obj)
    //
    ProductService.findAll()
    .then(response => {
      console.log(response);
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
