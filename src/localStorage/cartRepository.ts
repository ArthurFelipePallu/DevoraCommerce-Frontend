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

export function retrieveFromLocalSotageWithId(productId : number): OrderItemDTO {
    const stringifiedCart =
      localStorage.getItem(LOCALSTORAGE_CART_KEY) || '{ "items":[] }';
    const obj = JSON.parse(stringifiedCart) as OrderDTO;
  
    return instantiateRetrievedObjects(obj);
  }

function instantiateRetrievedObjects(obj: OrderDTO): OrderDTO {
  const cart = new OrderDTO();

  obj.items.forEach((item) => {
    cart.items.push(
      instantiateOrderItem(item)
    );
  });

  return cart;
}

function instantiateOrderItem(item:OrderItemDTO) : OrderItemDTO{
    
    return new OrderItemDTO(
                            item.productId,
                            item.quantity,
                            item.name,
                            item.price,
                            item.imgUrl 
                            );                    
}


export function clearLocalStorageCart()
{
    localStorage.setItem(LOCALSTORAGE_CART_KEY,'{ "items":[] }') ;
}
