import "./styles.css";
import { Link } from "react-router-dom";
import carrinhoIcon from "../../assets/carrinho.png";
import { useState } from "react";
import * as cartService from "../../services/cart-service";

export default function CartIcon() {

    const [cart,setCart] = useState(cartService.getCart());


    


  return (
    <div className="devcom-header-menu-item">
      <Link to="/cart">
        <img src={carrinhoIcon} alt="Admin"></img>
      </Link>      
        <div className="devcom-cart-count" >{cart.items.length}</div>
    </div>
  );
}
