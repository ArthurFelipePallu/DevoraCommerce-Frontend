import "./styles.css";
import { OrderItemDTO } from "../../../Models/order";

type Props = {
  product: OrderItemDTO;
};


export default function ConfirmationProductCard({ product }: Props) {
  
  console.log("[CartProductCard] rendering ...");

  return (
    <div className="devcom-card devcom-mb5">
      <div className="dsc-cart-item-container dsc-line-bottom">
        <div className="dsc-cart-item-left">
          <img src={product.imgUrl} alt="Computador" />
          <div className="dsc-cart-item-description">
            <h3>{product.name}</h3>
            <div className="dsc-cart-item-quantity-container">
              
              <p>{product.quantity}</p>
              
            </div>
          </div>
        </div>
        <div className="devcom-cart-allign-right-information">
          <div className="dsc-cart-item-right ">
            R$ {product.subTotal.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
