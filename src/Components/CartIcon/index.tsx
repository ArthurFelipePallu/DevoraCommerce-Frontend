import "./styles.css";
import { Link } from "react-router-dom";
import carrinhoIcon from "../../assets/carrinho.png";
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {

   
    const {contextCartCount } = useContext(ContextCartCount);


  return (
    <div className="devcom-header-menu-item">
      <Link to="/cart">
        <img src={carrinhoIcon} alt="Admin"></img>
      </Link>      
        <div className="devcom-cart-count" >{contextCartCount}</div>
        
    </div>
  );
  console.log("[CartIcon] rendering ...");

}
