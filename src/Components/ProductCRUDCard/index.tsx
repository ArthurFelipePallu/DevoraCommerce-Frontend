import "./styles.css";
import { history } from "../../utils/history";
import { ProductDTO } from "../../Models/product";
import editIcon from "../../assets/editIcon.png";
import deleteIcon from "../../assets/delete_icon.png";


type Props = {
  listedProduct: ProductDTO;
  configureAction : Function;
};

export default function ProductCRUDCard({ listedProduct ,configureAction }: Props) {

  function configureDelete()
  {
    configureAction("delete",listedProduct.id );
  }
  function goToProductForm() {
    history.push("/admin/products/" + listedProduct.id);
  }

  return (
    <div className="devcom-card devcom-mb5">
      <div className="devcom-crud-item-container dsc-line-bottom">
        <div
          className="devcom-crud-product-card-left-information devcom-menu-interactable"
          onClick={goToProductForm}
        >
          <div className="devcom-crud-product-card-left-information">
            <p>{listedProduct.id}</p>

            <img src={listedProduct.imgUrl} alt="Computador" />
          </div>
         
         <div className="devcom-crud-product-card-center-information">
          <div className="devcom-crud-product-price">
            <h3>R$: {listedProduct.price}</h3>
          </div>
          <div className="devcom-crud-product-name">
            <h3>{listedProduct.name}</h3>
          </div>
         </div>

        </div>
        <div className="devcom-crud-product-card-right-information">
          
          <div
            onClick={() => {}}
            className="devcom-menu-item "
          >
            <img src={editIcon} alt="Edit"></img>
          </div>

          <div
            // onClick={deleteProduct}
             onClick={configureDelete}
            className="devcom-menu-item "
          >
            <img src={deleteIcon} alt="Delete"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
