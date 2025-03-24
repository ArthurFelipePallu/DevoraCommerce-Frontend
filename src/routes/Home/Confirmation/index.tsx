import "./styles.css";
import { useEffect, useState } from "react";
import { OrderDTO } from "../../../Models/order";
import { ButtonDTO } from "../../../Models/button";
import BlueButton from "../../../Components/Buttons/BlueButton";
import * as OrderService from "../../../services/order-service";
import ConfirmationProductCard from "../../../Components/CartComponents/ConfirmationProductCard";
import { useParams } from "react-router-dom";


export default function ConfirmationPage(){

    const params = useParams();
    const [order,setOrder] = useState<OrderDTO>();


    useEffect(() => {
          OrderService.findByIdRequest(Number(params.orderId))
              .then( response =>{
                  setOrder(response.data);
                  console.log(response.data);
              })
    },[]);

 
 const inicioButton: ButtonDTO = {
   id: 1,
   name: "inicio",
   path: "/",
 };


  return (
    <main>
      <section id="cart-container-section" className="devcom-container">

        {
            order && 
            (
                order.items.length === 0 ? (
                <div>
                     <h2>Seu carrinho está vazio</h2>
                </div>
                ) : (
                    <>
                    {
                     order.items.map((product) => (
                     <ConfirmationProductCard key={product.productId} product={product}/>
                         ))}
                    <div className="dsc-cart-total-container">
                        <h3>R$ {order.total.toFixed(2)}</h3>
                    </div>
                    <p> Pedido realizado. Código do pedido : {order?.id}</p>
                    </>
                )
            )
        }
  
        <div className="dsc-btn-page-container">
          <BlueButton button={inicioButton} />
          
        </div>
      </section>
    </main>
  );
}