// import "./styles.css";
// import { OrderItemDTO } from "../../../Models/order";
// import * as cartService from "../../../services/cart-service";

// type Props = {
//   product: OrderItemDTO;
// };

// export default function CartProductCard({ product }: Props) {

  

//   function handleIncreaseItem(productId: number) {
//     cartService.increaseItem(productId);
//   }

//   return (
//     <div className="devcom-card devcom-mb5">
//       <div className="dsc-cart-item-container dsc-line-bottom">
//         <div className="dsc-cart-item-left">
//           <img src={product.imgUrl} alt="Computador" />
//           <div className="dsc-cart-item-description">
//             <h3>{product.name}</h3>
//             <div className="dsc-cart-item-quantity-container">
//               <div className="dsc-cart-item-quantity-btn">-</div>
//               <p>{product.quantity}</p>
//               <div
//                 onClick={() => handleIncreaseItem(product.productId)}
//                 className="dsc-cart-item-quantity-btn"> +
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dsc-cart-item-right">
//           R$ {product.subTotal.toFixed(2)}
//         </div>
//       </div>
//     </div>
//   );
// }
