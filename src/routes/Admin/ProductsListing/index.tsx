import "./styles.css";
import { useEffect, useState } from "react";
import { ButtonDTO } from "../../../Models/button";
import { ProductDTO } from "../../../Models/product";
import BarradeBusca from "../../../Components/BarradeBusca";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import ProductCRUDCard from "../../../Components/ProductCRUDCard";
import * as productService from "../../../services/product-service";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
import ConfirmationModal from "../../../Components/Modals/ConfirmationModal";

type QueryParams = {
  page: number;
  name: string;
  size: number;
  sort: string;
};

const botaoCadastro: ButtonDTO = {
  id: 1,
  name: "Novo Produto",
  path: "/admin/products/form",
};

export default function ProductListing() {

  // const [dialogInfoData,setDialogInfoData] = useState({
  //   visible: false,
  //   message:
  // });
  const [mockproductIdToDelete,setmockProductIdToDelete]= useState(2);

  const [productIdToDelete,setProductIdToDelete]= useState(-1);
  const [modalVisibility,setmodalVisibility]= useState(false);

  const [isLastPage, setLastPage] = useState(false);

  const [modalConfirmAction, setModalConfirmAction] = useState<Function>(()=>{});
  const [modalDenyAction, setModalDenyAction] = useState<Function>(() =>{});


  const [productList, setProductList] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
    size: 12,
    sort: "name",
  });
  const dialogModal: ConfirmationModalDTO = {
    message: "Confirme sua escolha",
    confirmText: "OK",
    denyText:"Cancel",
    answerAction : handleConfirmationModalAnswer,
  };


  function handleConfirmationModalAnswer(answer: boolean ){
    changeModalVisibility();

    if(answer)  modalConfirmAction();
    else  modalDenyAction();
  }

  function doNothing()
  {

  }

  function whatToDo(command:string,id:number)
  {
    if(command == "delete")
    {
      setmockProductIdToDelete(id);
      setConfirmAndDenyActions( setProductToDelete , () => doNothing) 
      
    }
    
  }

  function setConfirmAndDenyActions(confirm : Function , deny : Function)
  {
    setModalConfirmAction(confirm);
    if(deny != null)
      setModalDenyAction(deny);
      
  }
  function changeModalVisibility()
  {
    setmodalVisibility( !modalVisibility);
  }



  function setProductToDelete()
  {
    changeModalVisibility();
    setProductIdToDelete(mockproductIdToDelete);
  }


  useEffect(() => {
    productService.deleteProductByIdRequest(productIdToDelete)
    .then( () => {
      setProductList([]);
      setQueryParams({ ...queryParams, page: 0});
    });
  }, [productIdToDelete]);

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
          <div className="devcom-container">
            <div className="devcom-product-listing-cadastrar">
              <h1>Cadastro de Produto</h1>
              <WhiteButton button={botaoCadastro} />
            </div>

            <div>
              <BarradeBusca onSearchFilter={handleSearch} />
            </div>

            <div className="devcom-card devcom-product-listing-header devcom-product-listing-header-atributes">
              <p className="devcom-product-listing-header-id">Id</p>
              <p className="devcom-product-listing-header-preco">Preço</p>
              <p className="devcom-product-listing-header-name">Nome</p>
            </div>
            {productList.map((product) => (
              <ProductCRUDCard key={product.id}
                               listedProduct={product}
                               configureAction={whatToDo} />
            ))}

            {!isLastPage && (
              <div onClick={handleNextPageClick } className="devcom-mt40">
                <NextPageButton />
              </div>
            )}
          </div>
        </section>
        {
          modalVisibility && <ConfirmationModal data={dialogModal} />
        }
        
      </main>
    </>
  );
}
