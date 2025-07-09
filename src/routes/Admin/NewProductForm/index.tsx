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
                                                  return /^[a-zA-Z0-9.!#$%&*+=?^_´{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
                                                },
                                                message:"Favor informar um nome válido"
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
        // data do forms atualizado
        const updatedData = forms.update(formData,event.target.name,event.target.value);

        //forms validado
        const validatedData = forms.validate(updatedData,event.target.name);

        //finalmente forms setado para valores novos
        setFormData(validatedData);
    }
    function turnInputDirty(name : string)
    {
        const newFormData = forms.toDirty(formData,name);
        setFormData(newFormData);
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