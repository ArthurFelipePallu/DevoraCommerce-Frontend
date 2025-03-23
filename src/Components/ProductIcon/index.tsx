import "./styles.css";
import { Link } from "react-router-dom";
import productIcon from "../../assets/produtos.png";
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function ProductIcon() {

   
    const {contextCartCount } = useContext(ContextCartCount);


  return (
    <div className="devcom-header-product-item">
      <img src={productIcon} alt="Admin" />
      <Link to="/admin/cart">
        <p>Produtos</p>
      </Link>      
        <div className="devcom-cart-count" >{contextCartCount}</div>
        
    </div>
  );

}
