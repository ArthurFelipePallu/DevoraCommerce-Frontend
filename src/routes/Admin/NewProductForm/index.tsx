import "./styles.css"
import { ActionButtonDTO } from "../../../Models/button";
import ActionWhiteButton from "../../../Components/Buttons/ActionWhiteButton";
import ActionBlueButton from "../../../Components/Buttons/ActionBlueButton";
import { useState } from "react";


export default function NewProductForm()
{

    const [formProductName,setFormProductName] = useState<string>("");
    const [formProductPrice,setFormProductPrice] = useState<string>("");
    const [formProductImage,setFormProductImage] = useState(null);

    function CancelForm()
    {

    }
    function SaveForm()
    {

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

    function imageSelected(e : any)
    {
        setFormProductImage(e.target.files[0]);
    }



    return(
        <>
            <section className="devcom-new-product-form-section ">
                <div className="devcom-container devcom-card devcom-container-column-center">
                    <h1>DADOS DO PRODUTO</h1>
                    <form className="devcom-container-column-center devcom-new-product-form">
                        <input 
                            id="productName"
                            name="productName"
                            type="text"
                            placeholder="Product Name"
                            value={formProductName || ""}
                            onChange={ e => setFormProductName(e.target.value)}

                         />
                         <input 
                            id="productPrice"
                            name="productPrice"
                            type="text"
                            placeholder="Product Price"
                            value={formProductPrice || ""}
                            onChange={ e => setFormProductPrice(e.target.value)}
                         />
                        

                        
                         {
                            formProductImage && 
                            formProductImage !== null ? (
                                <>
                                    <img src={URL.createObjectURL(formProductImage)} 
                                        alt="not found" 
                                        width={"250px"}/>
                                    <button onClick={() => setFormProductImage(null)}>Remove</button>
                                </>                               
                            ) : 
                            (
                                <input 
                                    id="productImage"
                                    name="productImage"
                                    title="Select Image"
                                    type="file"
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