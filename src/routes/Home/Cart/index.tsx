import "./styles.css";

import * as cartService from "../../../services/cart-service";
//import CartProductCard from "../../../Components/CartComponents/CartProductCard";
import BlueButton from "../../../Components/Buttons/BlueButton";
import { ButtonDTO } from "../../../Models/button";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import { useState } from "react";
import { OrderDTO } from "../../../Models/order";
import { Link } from "react-router-dom";
import deleteIcon from "../../../assets/delete_icon.png";
import CartProductCard from "../../../Components/CartComponents/CartProductCard";


const finishOrderButton: ButtonDTO = {
  id: 1,
  name: "Finalizar Pedido",
  path: "Leads to Nowhere",
};
const continueBuyingButton: ButtonDTO = {
  id: 2,
  name: "Continuar Comprando",
  path: "Leads to Nowhere",
};
const clearCartButton: ButtonDTO = {
  id: 3,
  name: "Limpar Carrinho",
  path: "Leads to Nowhere",
};
export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  function HandleClearClick() {
    cartService.clearCart();
    setCart(cartService.getCart());
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    setCart(cartService.getCart());
  }
  function handleDeleteItem(productId: number) {
    cartService.deleteItemWithId(productId);
    setCart(cartService.getCart());
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
          <BlueButton button={finishOrderButton} />

          <Link to={"/catalog"}>
            <WhiteButton button={continueBuyingButton} />
          </Link>
          <div onClick={HandleClearClick}>
            <BlueButton button={clearCartButton} />
          </div>
        </div>
      </section>
    </main>
  );
}
