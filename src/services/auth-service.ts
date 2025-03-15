import QueryString from "qs";
import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";
import {CLIENT_ID,CLIENT_SECRET} from "../utils/system"
import { TokenDTO } from "../Models/Authentication/token";
import {CredentialsDTO} from "../Models/Authentication/auth";
import * as TokenRepository from "../localStorage/authTokenRepository";

export function loginRequest( loginData: CredentialsDTO){

    const requestHeaders ={
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encodeBase64(CLIENT_ID + ":" + CLIENT_SECRET )
    }

    //QueryString seta os valores de JSON para o formato x-www-form-urlencoded
    const requestBody = QueryString.stringify( {... loginData, grant_type : "password" } );

    const config :AxiosRequestConfig = {
        method:"POST",
        url:"/oauth/token",
        data: requestBody,
        headers: requestHeaders
    }

   return requestBackEnd(config)
}

export function requestFromBackEnd(logindData : CredentialsDTO)
{

}

export function logout()
{
    TokenRepository.clearToken();
}
function saveAccessToken(token : TokenDTO)
{
    TokenRepository.saveToken(token);
}
function getAccessToken() : TokenDTO
{
    return TokenRepository.retrieveToken();
}



function encodeBase64(toencode: string){
    return window.btoa(toencode);
}