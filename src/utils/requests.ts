//recursos para ajudar a fazer requisições

import { BASE_URL } from "./system";
import axios, { AxiosRequestConfig } from "axios";
import * as AuthService from "../services/auth-service"


export function requestBackEnd( config : AxiosRequestConfig){

    const requestHeaders = config.withCredentials?  {   
                                                        ...config.headers,
                                                        Authorization:"Bearer " + AuthService.getAccessToken() 
                                                    }
                                                    :config.headers;
    


    return axios( {
                    ...config, 
                    baseURL : BASE_URL ,
                    headers:requestHeaders 
                } );
}