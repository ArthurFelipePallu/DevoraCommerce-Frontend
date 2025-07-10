import "./styles.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  * as forms from "../../../utils/forms";
import { history } from "../../../utils/history";
import FormInput from "../../../Components/FormInput";
import { ActionButtonDTO } from "../../../Models/button";
import * as productService from "../../../services/product-service";
import ActionBlueButton from "../../../Components/Buttons/ActionBlueButton";
import ActionWhiteButton from "../../../Components/Buttons/ActionWhiteButton";

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
                                                  const regex = /^[a-zA-Z0-9\s\.,_-]+$/;//expresão regular REGEX - específica uma maneiraque o texto deve ser escrito, como formatos de telefones, email , etc
                                                  return regex.test(value); 
                                                },
                                                message:"Favor informar um nome válido com primeiras letras maíusculas e sem números"
                                              },
                                              price:{
                                                value: "",
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
                                              },
                                              phone:{
                                                value: "",
                                                id:"phone",
                                                name:"phone",
                                                type:"text",
                                                placeholder:"Phone Number",
                                                validation: function(value:any){
                                                    //expresão regular REGEX com formato de telefone
                                                  return /^\(?(?:[14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])\)?[ ]?([0-9]{4,5})[- ]?([0-9]{4})$/.test(value.toLowerCase()); 
                                                },
                                                message:"Favor informar um numero de telefone válido"
                                              }
                                            });




                                            
    useEffect( () => {
        if(isEditing)
        {
            const id = Number(params.productId);
            productService.findById(id).then( response => {
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
        //forms atualizado e validado
        const result = forms.updateAndValidate(formData,event.target.name,event.target.value);
        //forms setado para valores novos
        setFormData(result);
    }
    function turnInputDirty(name : string)
    {
        setFormData(forms.dirtyAndValidate(formData,name));
    }


    return(
        <>
            <section className="devcom-new-product-form-section ">
                <div className="devcom-container devcom-card devcom-container-column-center">
                    <h1>DADOS DO PRODUTO</h1>
                    <form className="devcom-container-column-center devcom-new-product-form">
                        <div>
                            <FormInput 
                                {...formData.name}
                                onChange={updateForm}
                                className="devcom-form-control"
                                onTurnDirty={turnInputDirty}
                            />
                            <div className="devcom-form-error" >{formData.name.message}</div>
                        </div>
                        <div>
                            <FormInput 
                            {...formData.price}
                                onChange={updateForm}
                                className="devcom-form-control"
                                onTurnDirty={turnInputDirty}
                            />
                            <div className="devcom-form-error" >{formData.price.message}</div>
                        </div>
                        <div>
                            <FormInput 
                            {...formData.phone}
                                onChange={updateForm}
                                className="devcom-form-control"
                                onTurnDirty={turnInputDirty}
                            />
                            <div className="devcom-form-error" >{formData.phone.message}</div>
                        </div>
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