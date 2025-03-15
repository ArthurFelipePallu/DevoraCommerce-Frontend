import { TokenDTO } from "../Models/Authentication/token";
import { LOCALSTORAGE_TOKEN_KEY } from "../utils/system";


export function saveToken(token : TokenDTO)
{
    const t = JSON.stringify(token);
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY , t );
}
export function retrieveToken() : TokenDTO
{    
    const t = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || '{}';
    const token = JSON.parse(t) as TokenDTO;
    return token;
}

export function clearToken()
{
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY,'{}') ;
}
