import "./styles.css";
import productIcon from "../../assets/produtos.png";
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";
import { history } from "../../utils/history";

export default function ProductIcon() {

   
    const {contextCartCount } = useContext(ContextCartCount);
    function goToProductListing()
    {
      history.push("products");
    }

  return (
    <div className="devcom-header-product-item" >
      <img src={productIcon} alt="Admin" />
      
        <p onClick={goToProductListing}>Produtos</p>
          
        <div className="devcom-cart-count" >{contextCartCount}</div>
        
    </div>
  );

}
