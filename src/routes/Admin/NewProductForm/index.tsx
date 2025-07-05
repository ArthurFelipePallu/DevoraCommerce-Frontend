import "./styles.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  * as forms from "../../../utils/forms";
import { history } from "../../../utils/history";
import FormInput from "../../../Components/FormInput";
import { ActionButtonDTO } from "../../../Models/button";
import ActionBlueButton from "../../../Components/Buttons/ActionBlueButton";
import ActionWhiteButton from "../../../Components/Buttons/ActionWhiteButton";
import * as productService from "../../../services/product-service";

export default function NewProductForm()
{

    const params = useParams();

    const isEditing = params.productId !== 'create'; 

  const [formData, setFormData] = useState<any>({
                                              name:{
                                                value: "",
                                                id:"name",
                                                name:"name",
                                                type:"text",
                                                placeholder:"Product Name",
                                                validation: function(value:string){
                                                  return /^[a-zA-Z0-9.!#$%&*+=?^_´{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
                                                },
                                                message:"Favor informar um nome válido"
                                              },
                                              price:{
                                                value: 15,
                                                id:"price",
                                                name:"price",
                                                type:"number",
                                                placeholder:"Product Price",                                                
                                                validation: function(value:any){
                                                  return Number(value) > 0;
                                                },
                                                message:"Favor informar um valor positivo",
                                              },
                                              imgUrl:{
                                                value: "",
                                                id:"imgUrl",
                                                name:"imgUrl",
                                                type:"text",
                                                placeholder:"Imagem",
                                                message:"Favor carregar uma imagem válida"
                                              }
                                            });




                                            
    useEffect( () => {
        const obj = forms.validate(formData,"price");
        console.log(obj);
        if(isEditing)
        {
            const id = Number(params.productId);
            productService.findById(id).then( response => {
                //console.log(response.data);
                const newFormData = forms.updateAll(formData,response.data);
                setFormData(newFormData);
            } );
        }
    } , []);

    function CancelForm()
    {
        returnTo("/admin/products");
    }
    function SaveForm()
    {
        returnTo("/admin/products");
    }
    function returnTo(path:string)
    {
        history.push(path);
    }

    const CancelButton:ActionButtonDTO ={
        id:1,
        name:"Cancelar",
        action:CancelForm
    }
    const SaveButton:ActionButtonDTO ={
        id:2,
        name:"Salvar",
        action:SaveForm
    }

    function imageSelected(event : any)
    {
        forms.update(formData,event.target.name,event.target.files[0]);
    }
    function updateForm(event : any)
    {
        setFormData(forms.update(formData,event.target.name,event.target.value));
    }


    return(
        <>
            <section className="devcom-new-product-form-section ">
                <div className="devcom-container devcom-card devcom-container-column-center">
                    <h1>DADOS DO PRODUTO</h1>
                    <form className="devcom-container-column-center devcom-new-product-form">
                        <FormInput 
                            {...formData.name}
                            onChange={updateForm}
                         />
                         <FormInput 
                           {...formData.price}
                            onChange={updateForm}
                         />
                        

                        
                         {
                            formData.imgUrl.value && 
                            formData.imgUrl.value !== "" ? (
                                <>
                                    {/* <img src={URL.createObjectURL(formData.imgUrl.value)} 
                                        alt="not found" 
                                        width={"250px"}/>
                                    <button onClick={() => forms.update(formData,formData.imgUrl.name,null)}>Remove</button> */}
                                    <FormInput 
                                    {...formData.imgUrl}
                                    onChange={imageSelected}
                                />
                                </>                               
                            ) : 
                            (
                                <FormInput 
                                    {...formData.imgUrl}
                                    onChange={imageSelected}
                                />
                            )
                         }

                        

                    </form>
                    <div className="devcom-new-product-form-action-buttons">
                        <ActionWhiteButton button={CancelButton} />
                        <ActionBlueButton button={SaveButton} />
                    </div>
                </div>
            </section>
        </>
    );

}