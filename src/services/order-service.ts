import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";
import { OrderDTO } from "../Models/order";

export function findByIdRequest( orderId: number){

    const config :AxiosRequestConfig = {
        method:"GET",
        url:`/orders/${orderId}`,
        withCredentials: true,
    }

   return requestBackEnd(config)
}

export function PostOrderRequest(order : OrderDTO)
{
   
    const config :AxiosRequestConfig = {
        method:"POST",
        url:`/orders`,
        data:order,
        withCredentials: true,
    }
    return requestBackEnd(config)
}
