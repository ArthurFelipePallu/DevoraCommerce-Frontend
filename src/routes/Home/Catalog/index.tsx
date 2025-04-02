import "./styles.css";
import CatalogCard from "../../../Components/CatalogCard";
import BarradeBusca from "../../../Components/BarradeBusca";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
import { useEffect, useState } from "react";
import * as ProductService from "../../../services/product-service";
import { ProductDTO } from "../../../Models/product";


type QueryParams ={
  page : number;
  name : string;
  size : number;
  sort : string;
}

export default function Catalog() {

  const [isLastPage,setLastPage] = useState(false);

  const [catalog_product_list, setCatalogList] = useState<ProductDTO[]>([]);

  const[queryParams,setQueryParams] = useState<QueryParams>({page:0 , name:"",size:12, sort:"name"});

  useEffect(() => {
    ProductService.findPageRequest(queryParams.page,queryParams.name).then((response) => {
      const nextPage = response.data.content;      
      setLastPage(response.data.last);
      setCatalogList(catalog_product_list.concat(nextPage));
    });
  }, [queryParams]);

  function handleSearch(searchText : string){
    setCatalogList([]);
    setQueryParams({...queryParams , page : 0 , name :searchText });
  }

function handleNextPageClick(){
  setQueryParams({...queryParams, page : queryParams.page +1  });
}


  return (
    <>
      <main>
        <section id="catalogo-section" className="devcom-container">
          <BarradeBusca onSearchFilter={handleSearch}/>

          <div
            id="products-container"
            className="devcom-mb20 devcom-mt20 devcom-catalog-cards"
          >
            {catalog_product_list.map((product) => (
              <CatalogCard key={product.id} catalogproductProp={product} />
            ))}
          </div>
          {
            !isLastPage &&
            <div onClick={handleNextPageClick}>
              <NextPageButton />
            </div>
          }
            
        </section>
      </main>
    </>
  );
}
