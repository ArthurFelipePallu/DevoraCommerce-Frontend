import "./styles.css";

import * as cartService from "../../../services/cart-service";
import * as orderService from "../../../services/order-service";

import BlueButton from "../../../Components/Buttons/BlueButton";
import { ButtonDTO } from "../../../Models/button";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import { useContext, useState } from "react";
import { OrderDTO } from "../../../Models/order";
import CartProductCard from "../../../Components/CartComponents/CartProductCard";
import { ContextCartCount } from "../../../utils/context-cart";
import { history } from "../../../utils/history";

const finishOrderButton: ButtonDTO = {
  id: 1,
  name: "Finalizar Pedido",
  path: "",
};
const continueBuyingButton: ButtonDTO = {
  id: 2,
  name: "Continuar Comprando",
  path: "/catalog",
};
const clearCartButton: ButtonDTO = {
  id: 3, 
  name: "Limpar Carrinho",
  path: "",
};
export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());
  const { setContextCartCount} = useContext(ContextCartCount);

  function HandleClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handleFinish()
  {
    orderService.PostOrderRequest(cart).then( response => {
      HandleClearClick();
      history.push(`/confirmation/${response.data.id}`);
    })
    .catch( error =>{
      console.log("[CART] New Order request" + error);
    });
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    updateCart();
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();    
  }
  function handleDeleteItem(productId: number) {
    cartService.deleteItemWithId(productId);
    updateCart();
  }

  function updateCart(){
    const newCart = cartService.getCart(); 
    setCart(newCart);
    setContextCartCount(cartService.FindTotalItemsInCart());
  }



  const functionsToPass={
    onIncreaseQuantityOnClick : handleIncreaseItem,
    onDecreaseQuantityOnClick : handleDecreaseItem,
    onDeleteOnClick : handleDeleteItem,
  }


  return (
    <main>
      <section id="cart-container-section" className="devcom-container">
        {cart.items.length === 0 ? (
          <div>
            <h2>Seu carrinho está vazio</h2>
          </div>
        ) : (
          cart.items.map((product) => (
            <CartProductCard key={product.productId} product={product} functions={functionsToPass}/>
          ))
        )}
        <div className="dsc-cart-total-container">
          <h3>R$ {cart.total.toFixed(2)}</h3>
        </div>

        <div className="dsc-btn-page-container">
          
          <div onClick={handleFinish}>
            <BlueButton button={finishOrderButton }  />
          </div>
          
          <WhiteButton button={continueBuyingButton} />
          
          <div onClick={HandleClearClick}>
            <BlueButton button={clearCartButton} />
          </div>
        </div>
      </section>
    </main>
  );
}
