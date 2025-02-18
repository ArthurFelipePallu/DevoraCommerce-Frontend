import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
//import { ProductDTO } from "../Models/product";


export function findPageRequest( page:number, name:string, size:number = 12,sort:string = "name")  {
    const config : AxiosRequestConfig ={
        method:"GET",
        baseURL:BASE_URL,
        url:"/products",
        params:{ // COMO O NOME DAS VARIÁVEIS DE PARAMS BATEM COM O NOME DAS VARIÁVEIS DA FUNÇÃO NÃO PRECISA ATRIBUIR , SÓ PASSAR ASSIM MESMO
            page, // mesmo que - (params)page = (parametro da função)page
            name,
            size,
            sort
        }
    }

    return axios(config);
}
export function findById(id: number){
    return axios.get(`${BASE_URL}/products/${id}`)
}



