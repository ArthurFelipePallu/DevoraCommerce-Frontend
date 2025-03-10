import { AxiosRequestConfig } from "axios";
import { requestBackEnd } from "../utils/requests";


export function findPageRequest( page:number, name:string, size:number = 12,sort:string = "name")  {
    const config : AxiosRequestConfig ={
        method:"GET",
        url:"/products",
        params:{ // COMO O NOME DAS VARIÁVEIS DE PARAMS BATEM COM O NOME DAS VARIÁVEIS DA FUNÇÃO NÃO PRECISA ATRIBUIR , SÓ PASSAR ASSIM MESMO
            page, // mesmo que - (params)page = (parametro da função)page
            name,
            size,
            sort
        }
    }

    return requestBackEnd(config);
}
export function findById(id: number){
    return requestBackEnd({url: `/products/${id}`});
}



