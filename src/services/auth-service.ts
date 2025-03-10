import {CredentialsDTO} from "../Models/Authentication/auth";
import {CLIENT_ID,CLIENT_SECRET} from "../utils/system"

export function loginRequest( loginData: CredentialsDTO){

    const headers ={
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encodeBase64(CLIENT_ID + ":" + CLIENT_SECRET )
    }


   console.log(headers);
}


function encodeBase64(toencode: string){
    return window.btoa(toencode);
}