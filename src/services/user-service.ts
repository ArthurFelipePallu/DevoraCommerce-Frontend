import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";


export function findLoggedUser(){

    const config :AxiosRequestConfig ={
        url:`/users/me`,
        withCredentials: true,
    }
    return requestBackEnd(config);
}



