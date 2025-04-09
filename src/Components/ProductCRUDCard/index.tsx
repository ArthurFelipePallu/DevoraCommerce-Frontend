import "./styles.css"
import  deleteIcon from "../../assets/delete_icon.png"
import { ProductDTO } from "../../Models/product";
import { history } from "../../utils/history";

type Props ={
    listedProduct : ProductDTO;
}

export default function ProductCRUDCard({listedProduct}:Props)
{

    function handleClick(text : string)
    {
        //DO NOTHING
    }
    function goToProductForm()
    {
      history.push("/admin/products/" + listedProduct.id);
    }

    return (
        <div className="devcom-card devcom-mb5">
          <div className="dsc-cart-item-container dsc-line-bottom">
            <div className="dsc-cart-item-left devcom-menu-interactable" onClick={goToProductForm} >
              <img src={listedProduct.imgUrl} alt="Computador" />
              <div className="dsc-cart-item-description">
                <h3>{listedProduct.name}</h3>
                <h3>{listedProduct.price}</h3>
              </div>
            </div>
            <div className="devcom-cart-allign-right-information">
                  
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