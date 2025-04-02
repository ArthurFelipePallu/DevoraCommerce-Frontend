import "./styles.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { history } from "../../../utils/history";
import { ProductDTO } from "../../../Models/product";
import * as productService from "../../../services/product-service";
import ProductDetailsCard from "../../../Components/ProductDetailsCard";



export default function ProductForm()
{
    const params = useParams();
    
    const [product,setProduct] = useState<ProductDTO>();

    useEffect( () => {
        productService.findById( Number(params.productId)).then( (response) => {
            setProduct(response.data);
        } ).catch(() => { history.push("/admin/")});
    } ,[]);



    return (
        <>
            {product &&
            <ProductDetailsCard product={product}/>}
        </>
    );
}