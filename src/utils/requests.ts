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

//REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function(config){ //DO SOMETHING BEFORE REQUEST IS SENT
        
        return config;
    },
    function (error){ // DO SOMETHING WITH REQUEST ERROR

        return Promise.reject(error);
    }
);


//RESPONSE INTERCEPTOR
axios.interceptors.request.use(
    

    function(response){ //DO SOMETHING BEFORE RESPONSE IS SENT
        
        return response;
    },
    function (error){ // DO SOMETHING WITH RESPONSE ERROR

        if(error.response.status == 401)
            {
              console.log("Erro no LOGIN: ",error);
            }
        return Promise.reject(error);
    }
);