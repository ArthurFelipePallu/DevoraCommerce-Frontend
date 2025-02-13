import "./styles.css"
import {OrderItemDTO } from "../../../Models/order";




type Props = {
  product: OrderItemDTO;
};

export default function CartProductCard({ product }: Props)
{

    return(
        
            <div className="dsc-cart-item-container dsc-line-bottom">
                <div className="dsc-cart-item-left">
                  <img src={product.imgUrl} alt="Computador" />
                  <div className="dsc-cart-item-description">
                    <h3>{product.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div className="dsc-cart-item-quantity-btn">-</div>
                      <p>{product.quantity}</p>
                      <div className="dsc-cart-item-quantity-btn">+</div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">R$ {product.subTotal}</div>
            </div>
        
    )
    
        
}