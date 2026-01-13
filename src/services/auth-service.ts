import axios from "axios";
import QueryString from "qs";
import jwtDecode from "jwt-decode";
import { TokenDTO } from "../Models/Authentication/token";
import * as TokenRepository from "../localStorage/authTokenRepository";
import {AccessTokenPayloadDTO, CredentialsDTO, RoleEnum} from "../Models/Authentication/auth";

export function loginRequest( loginData: CredentialsDTO){

    const headers = {
        "Content-Type" : "application/x-www-form-urlencoded",
    };

    const requestBody =QueryString.stringify({
        ...loginData,
        grant_type : "password"
    });
    return axios({
        method:"POST",
        url: "/.netlify/functions/login",
        data: requestBody,
        headers,
        withCredentials:false
    });
}

export function logout() 
{
    TokenRepository.clearToken();
}
export function saveAccessToken(token : TokenDTO)
{
    TokenRepository.saveToken(token);
}
export function getAccessToken() : TokenDTO
{
    return TokenRepository.retrieveToken();
}

export function getAccessTokenPayload() : AccessTokenPayloadDTO | undefined
{
    try {
        const token = TokenRepository.retrieveTokenRAW();
        return token == null? undefined : (jwtDecode(token) as AccessTokenPayloadDTO);
    }catch(error){
        return undefined;
    }
}

export function isAuthenticated():boolean {
    const tokenPayload = getAccessTokenPayload();
    return tokenPayload                              // se token existe
            && tokenPayload?.exp * 1000 > Date.now() // se token nao expirou
            ? true : false;
}

export function hasAnyRoles(roles : RoleEnum[]) : boolean{
    if(roles.length === 0)
        return true;
    const tokenPayload = getAccessTokenPayload();
    console.log(tokenPayload);
   
    if(tokenPayload !== undefined)
    {
        for(let i = 0; i< roles.length; i++){
            if(tokenPayload.authorities.includes(roles[i]))
                return true
        }
        

    }
    
    return false;
}

export function hasRole(role:RoleEnum) : boolean{
    const tokenPayload = getAccessTokenPayload();
    if(tokenPayload !== undefined)
        if(tokenPayload.authorities.includes(role))
            return true 
    return false;
}
