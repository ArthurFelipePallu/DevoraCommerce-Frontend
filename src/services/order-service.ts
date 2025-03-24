import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";
import { OrderDTO } from "../Models/order";
import QueryString from "qs";

export function findByIdRequest( orderId: number){

    const config :AxiosRequestConfig = {
        method:"GET",
        url:`/orders/${orderId}`,
        withCredentials: true,
    }

   return requestBackEnd(config)
}

export function PostOrder(order : OrderDTO)
{
    const requestBody = QueryString.stringify( order );

    const config :AxiosRequestConfig = {
        method:"GET",
        url:`/orders`,
        data:requestBody,
        withCredentials: true,
    }
    return requestBackEnd(config)
}
