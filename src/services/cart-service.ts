
import { OrderDTO, OrderItemDTO } from "../Models/order";
import { ProductDTO } from "../Models/product";
import * as cartRepository from "../localStorage/cartRepository";


export function saveCart(cart : OrderDTO){
  cartRepository.saveToLocalStorage(cart);
}

export function getCart() : OrderDTO{
  return cartRepository.retrieveFromLocalSotage();
}

export function addProductToCart(product : ProductDTO){

  if(!alreadyHasProductInCart(product.id)){
    const cart = getCart();
    
    const newItemDTO = new OrderItemDTO(product.id,
                                        1,
                                        product.name,
                                        product.price,
                                        product.imgUrl );
    
      cart.items.push(newItemDTO);

    saveCart(cart);
  }
  else{
    //já tem produto no carrinho
    //mostrar mensagem para usuário
  }

  
}

function alreadyHasProductInCart(productId : number ):boolean{
  
  if(!hasItemWithId(productId)){
    return false;
  }
  return true;
}

export function clearCart()
{
  cartRepository.clearLocalStorageCart();

}

export function increaseItem( productId : number){
  const cart = cartRepository.retrieveFromLocalSotage();
  const item = cart.items.find( x => x.productId === productId)
  if(item){
    item.quantity++;
    saveCart(cart);
  }
}
export function decreaseItem( productId : number){
  const cart = cartRepository.retrieveFromLocalSotage();
  const item = cart.items.find( x => x.productId === productId)
  if(item){
    item.quantity--;
    if(item.quantity <1)
      cart.items = cart.items.filter(x => x.productId !== productId);//tira item do carrinho
          
    saveCart(cart);
  }
}

export function deleteItemWithId(productId : number){
  const cart = cartRepository.retrieveFromLocalSotage();
 
  cart.items = cart.items.filter(x => x.productId !== productId);//tira item do carrinho
          
  saveCart(cart);
  
}

export function retrieveItemWithId(productId:number) :OrderItemDTO{
  const cart = cartRepository.retrieveFromLocalSotage();
  const item = cart.items.find( x => x.productId === productId)
  if(!item)
  {
    //lida com erro
  }
  return item;
}

function hasItemWithId(productId : number) : boolean{

    const item = cartRepository.retrieveFromLocalSotage().items.find( x => x.productId === productId)

    return item !== undefined ;
}