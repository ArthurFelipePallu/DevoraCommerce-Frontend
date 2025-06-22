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

  const [modalMessage,setModalMessage]= useState("");


  const [productId,setProductId]= useState(-1);
  const [mockProductId,setMockProductId]= useState(-1);
  
  const [editNow,setEditNow]= useState(false);
  const [deleteNow,setDeleteNow]= useState(false);
  const [isLastPage, setLastPage] = useState(false);
  const [modalVisibility,setmodalVisibility]= useState(false);

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
    message: modalMessage,
    confirmText: "OK",
    denyText:"Cancel",
    answerAction : handleConfirmationModalAnswer,
  };


  //Recebe resposta do modal e chama as funções atribuídas a resposta
  function handleConfirmationModalAnswer(answer: boolean ){
    changeModalVisibility(); // desliga o modal

     if(answer)  modalConfirmAction();
    else   modalDenyAction();
  }

  // Função atribuida ao confirmAction do Modal 
  // será chamada quando o comando do product card seja 'delete'
  // e o usuário clique Cancelar no modal
  function doNothing()
  {
    console.log("Did Nothing");
  }

  // Função atribuida ao confirmAction do Modal 
  // será chamada quando o comando do product card seja 'delete'
  // e o usuário clique OK no modal
  function EditProduct()
  {
      setEditNow(true);
  }

  // Função atribuida ao confirmAction do Modal 
  // será chamada quando o comando do product card seja 'delete'
  // e o usuário clique OK no modal
  function DeleteProduct()
  {
        setDeleteNow(true);
  }

  // recebe comando do product card e altera as funções de confirm e deny do
  // modal de acordo com o comando
  function setProductCardsCommandActions(command:string,id:number) 
  {        
    setMockProductId(id);// armazena id a ser deletado se for o que usuário deseja fazer mesmo
    changeModalVisibility(); // liga modal

    if(command == "delete")
    {
      setModalMessage("Deletar Item : " + id + " ?");
      setConfirmAndDenyActions(() =>  DeleteProduct , () => doNothing) // altera as funçoes de confirm e deny do modal
    }
    else if(command == "edit")
    {
      setModalMessage("Editar Item : " + id + " ?");
      setConfirmAndDenyActions(() =>  EditProduct , () => doNothing) // altera as funçoes de confirm e deny do modal
    }
    
  }

  // seta as funções de commfirmação e negação atribuídas as respostas do modal
  function setConfirmAndDenyActions(confirm : Function , deny : Function)
  {
    if(confirm != null)
      setModalConfirmAction(confirm);
    if(deny != null)
      setModalDenyAction(deny);
  }

  // Ativa e desativa o modal
  function changeModalVisibility()
  {
    setmodalVisibility( !modalVisibility);
  }

  useEffect(() => {
    setProductId(mockProductId);
  }, [mockProductId]);


  useEffect(() => {

    if(productId == -1 || !deleteNow) return;
    
    productService.deleteProductByIdRequest(mockProductId)
    .then( () => {
      setProductList([]);
      setQueryParams({ ...queryParams, page: 0});
    });
    setDeleteNow(false);
  }, [productId, deleteNow]);


  useEffect(() => {

    if(productId == -1 || !editNow) return;
    
      console.log("editando produto : " +  mockProductId );

    setEditNow(false);
  }, [productId, editNow]);

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setLastPage(response.data.last);
        setProductList(productList.concat(nextPage));
      })
      .catch((error) => {console.log(error)});
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
                               configureAction={setProductCardsCommandActions} />
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
