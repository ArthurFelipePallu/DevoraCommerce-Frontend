import { requestBackEnd } from "../utils/requests";
import * as AuthService from "./auth-service"


export function findLoggedUser(){

    const requestHeaders ={
        Authorization : "Bearer " + AuthService.getAccessToken()
    }
    return requestBackEnd({url: `/users/me`, headers: requestHeaders});
}



