import "./styles.css";
import { OrderItemDTO } from "../../../Models/order";
import deleteIcon from "../../../assets/delete_icon.png";

type Props = {
  product: OrderItemDTO;

  functions: {
    onIncreaseQuantityOnClick: Function;

    onDecreaseQuantityOnClick: Function;

    onDeleteOnClick: Function;
  };
};


export default function CartProductCard({ product, functions }: Props) {
  function handleClick(name: string) {
    switch (name) {
      case "increase": {
        if (functions.onIncreaseQuantityOnClick) 
          functions.onIncreaseQuantityOnClick(product.productId);
        break;
      }
      case "decrease": {
        if (functions.onDecreaseQuantityOnClick) 
          functions.onDecreaseQuantityOnClick(product.productId);
        break;
      }
      case "delete": {
        if (functions.onDeleteOnClick) 
          functions.onDeleteOnClick(product.productId);
        break;
      }
      default: {
        //statements;
        break;
      }
    }    
  }
  console.log("[CartProductCard] rendering ...");

  return (
    <div className="devcom-card devcom-mb5">
      <div className="dsc-cart-item-container dsc-line-bottom">
        <div className="dsc-cart-item-left">
          <img src={product.imgUrl} alt="Computador" />
          <div className="dsc-cart-item-description">
            <h3>{product.name}</h3>
            <div className="dsc-cart-item-quantity-container">
              <div
                onClick={() => handleClick("decrease")}
                className="dsc-cart-item-quantity-btn"
              >
                -
              </div>
              <p>{product.quantity}</p>
              <div onClick={() => handleClick("increase")} className="dsc-cart-item-quantity-btn">
                {" "}
                +
              </div>
            </div>
          </div>
        </div>
        <div className="devcom-cart-allign-right-information">
          <div className="dsc-cart-item-right ">
            R$ {product.subTotal.toFixed(2)}
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
