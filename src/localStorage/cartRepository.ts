import { OrderDTO, OrderItemDTO } from "../Models/order";
import { LOCALSTORAGE_CART_KEY } from "../utils/system";

export function saveToLocalStorage(cart: OrderDTO) {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem(LOCALSTORAGE_CART_KEY, stringifiedCart);
}

export function retrieveFromLocalSotage(): OrderDTO {
  const stringifiedCart =
    localStorage.getItem(LOCALSTORAGE_CART_KEY) || '{ "items":[] }';
  const obj = JSON.parse(stringifiedCart) as OrderDTO;

  return instantiateRetrievedObjects(obj);
}

function instantiateRetrievedObjects(obj: OrderDTO): OrderDTO {
  const cart = new OrderDTO();

  obj.items.forEach((item) => {
    cart.items.push(
      new OrderItemDTO(
        item.productId,
        item.quantity,
        item.name,
        item.price,
        item.imgUrl
      )
    );
  });

  return cart;
}


export function clearLocalStorageCart()
{
    localStorage.setItem(LOCALSTORAGE_CART_KEY,'{ "items":[] }') ;
}
