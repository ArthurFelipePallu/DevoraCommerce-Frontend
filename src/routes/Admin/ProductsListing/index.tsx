import "./styles.css";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../Models/product";
import BarradeBusca from "../../../Components/BarradeBusca";
import ProductCRUDCard from "../../../Components/ProductCRUDCard";
import * as productService from "../../../services/product-service";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import { ButtonDTO } from "../../../Models/button";

type QueryParams = {
  page: number;
  name: string;
  size: number;
  sort: string;
};
const botaoCadastro: ButtonDTO = {
  id: 1,
  name: "Novo Produto",
  path: "/admin/products/form"
};
export default function ProductListing() {
  const [isLastPage, setLastPage] = useState(false);

  const [productList, setProductList] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
    size: 12,
    sort: "name",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setLastPage(response.data.last);
        setProductList(productList.concat(nextPage));
      })
      .catch((error) => {});
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProductList([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }
  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (
    <>
      <main>    
        <section id="product-listing-section">
          <div className="devcom-product-listing-cadastrar">
            <h1>Cadastro de Produto</h1>
            <WhiteButton button={botaoCadastro} />
          </div>
          
          <div>
            <BarradeBusca onSearchFilter={handleSearch} />
          </div>

          <div className="devcom-container">
          <div className="devcom-card devcom-product-listing-header devcom-product-listing-header-atributes">
            <p className="devcom-product-listing-header-id">Id</p>
            <p className="devcom-product-listing-header-preco">Preço</p>
            <p className="devcom-product-listing-header-name">Nome</p>
          </div>
            {productList.map((product) => (
              <ProductCRUDCard key={product.id} listedProduct={product} />
            ))}
          </div>

          {!isLastPage && (
            <div onClick={handleNextPageClick} className="devcom-mt40">
              <NextPageButton />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
