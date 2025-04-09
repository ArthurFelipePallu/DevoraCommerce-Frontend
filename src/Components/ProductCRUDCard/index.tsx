import "./styles.css";
import { history } from "../../utils/history";
import { ProductDTO } from "../../Models/product";
import editIcon from "../../assets/editIcon.png";
import deleteIcon from "../../assets/delete_icon.png";

type Props = {
  listedProduct: ProductDTO;
};

export default function ProductCRUDCard({ listedProduct }: Props) {
  function handleClick(text: string) {
    //DO NOTHING
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
            <h3>R$: {listedProduct.price}</h3>

            <h3>{listedProduct.name}</h3>
         </div>

        </div>
        <div className="devcom-crud-product-card-right-information">
          
          <div
            onClick={() => handleClick("edit")}
            className="devcom-menu-item "
          >
            <img src={editIcon} alt="Edit"></img>
          </div>

          <div
            onClick={() => handleClick("delete")}
            className="devcom-menu-item "
          >
            <img src={deleteIcon} alt="Delete"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
