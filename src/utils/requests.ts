//recursos para ajudar a fazer requisições

import { BASE_URL } from "./system";
import axios, { AxiosRequestConfig } from "axios";


export function requestBackEnd( config : AxiosRequestConfig){

    return axios({...config, baseURL : BASE_URL });
}