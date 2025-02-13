import { OrderDTO } from "../Models/order";
import { LOCALSTORAGE_CART_KEY } from "../utils/system";



export function saveToLocalStorage(cart : OrderDTO){

    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem(LOCALSTORAGE_CART_KEY ,stringifiedCart);
}

export function retrieveFromLocalSotage() : OrderDTO{
    const stringifiedCart = localStorage.getItem(LOCALSTORAGE_CART_KEY) || '{ "items"=[] }';
    return JSON.parse(stringifiedCart);
}

// function instantiateRetrievedObjects(cart: object):OrderDTO{



// }