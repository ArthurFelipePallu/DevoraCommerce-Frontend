import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as forms from "../../../utils/forms";
import { history } from "../../../utils/history";
import FormInput from "../../../Components/FormInput";
import * as selectStyles from "../../../utils/select";
import { CategoryDTO } from "../../../Models/category";
import FormSelect from "../../../Components/FormSelect";
import { ActionButtonDTO } from "../../../Models/button";
import FormTextArea from "../../../Components/FormTextArea";
import * as productService from "../../../services/product-service";
import * as categoryService from "../../../services/category-service";
import ActionBlueButton from "../../../Components/Buttons/ActionBlueButton";
import ActionWhiteButton from "../../../Components/Buttons/ActionWhiteButton";

export default function NewProductForm() {
  const params = useParams();

  const isEditing = params.productId !== "create";

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Product Name",
      validation: function (value: string) {
        const regex = /^[a-zA-Z0-9\s\.,_-]+$/; //expresão regular REGEX - específica uma maneiraque o texto deve ser escrito, como formatos de telefones, email , etc
        return regex.test(value);
      },
      message:
        "Favor informar um nome válido com primeiras letras maíusculas e sem números",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Product Price",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
      message: "Favor carregar uma imagem válida",
    },
    categories: {
      value: [],
      id: "categories",
      name: "categories",
      type: "text",
      placeholder: "Categorias",
      validation: function (value: CategoryDTO[]) {
        return value.length > 0;
      },
      message: "Pelo menos uma categoria deve ser selecionada",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição do produto",
      validation: function (value: string) {
        //expresão regular REGEX com minimo 10 caracteres e sem máximo
        return /^.{10,}$/.test(value);
      },
      message: "Descrição deve ter pelo menos 10 caracteres",
    },
  });

  useEffect(() => {
    categoryService
      .findAllRequest()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isEditing) {
      const id = Number(params.productId);
      productService.findById(id).then((response) => {
        const newFormData = forms.updateAll(formData, response.data);
        setFormData(newFormData);
      });
    }
  }, []);

  function handleSubmit() {
    const formValidated = forms.dirtyAndValidateAll(formData);
    
    if (forms.hasAnyInvalid(formValidated)) {
      setFormData(formValidated);
      return;
    }
  }

  function CancelForm() {
    returnTo("/admin/products");
  }
  function SaveForm() {}

  function returnTo(path: string) {
    history.push(path);
  }

  const CancelButton: ActionButtonDTO = {
    id: 1,
    name: "Cancelar",
    action: CancelForm,
  };
  const SaveButton: ActionButtonDTO = {
    id: 2,
    name: "Salvar",
    action: handleSubmit,
  };

  function imageSelected(event: any) {
    forms.update(formData, event.target.name, event.target.files[0]);
  }
  function updateForm(event: any) {
    //forms atualizado e validado
    const result = forms.updateAndValidate(
      formData,
      event.target.name,
      event.target.value
    );
    //forms setado para valores novos
    setFormData(result);
  }
  function turnInputDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  return (
    <>
      <section className="devcom-new-product-form-section ">
        <div className="devcom-container devcom-card devcom-container-column-center">
          <h1>DADOS DO PRODUTO</h1>
          <form className="devcom-container-column-center devcom-new-product-form" >
            <div>
              <FormInput
                {...formData.name}
                onChange={updateForm}
                className="devcom-form-control"
                onTurnDirty={turnInputDirty}
              />
              <div className="devcom-form-error">{formData.name.message}</div>
            </div>
            <div>
              <FormInput
                {...formData.price}
                onChange={updateForm}
                className="devcom-form-control"
                onTurnDirty={turnInputDirty}
              />
              <div className="devcom-form-error">{formData.price.message}</div>
            </div>
            <div>
              <FormSelect
                className="devcom-form-control devcom-form-select-container"
                {...formData.categories}
                isMulti
                onChange={(obj: any) => {
                  const newFormData = forms.updateAndValidate(
                    formData,
                    "categories",
                    obj
                  );
                  console.log(newFormData.categories);
                  setFormData(newFormData);
                }}
                options={categories}
                onTurnDirty={turnInputDirty}
                styles={selectStyles}
                getOptionLabel={(obj: any) => obj.name}
                getOptionValue={(obj: any) => String(obj.id)}
              />
              <div className="devcom-form-error">
                {formData.categories.message}
              </div>
            </div>
            <div>
              <FormTextArea
                {...formData.description}
                onChange={updateForm}
                className="devcom-form-control devcom-textarea"
                onTurnDirty={turnInputDirty}
              />
              <div className="devcom-form-error">
                {formData.description.message}
              </div>
            </div>
            {formData.imgUrl.value && formData.imgUrl.value !== "" ? (
              <>
                {/* <img src={URL.createObjectURL(formData.imgUrl.value)} 
                                        alt="not found" 
                                        width={"250px"}/>
                                    <button onClick={() => forms.update(formData,formData.imgUrl.name,null)}>Remove</button> */}
                <FormInput {...formData.imgUrl} onChange={imageSelected} />
              </>
            ) : (
              <FormInput {...formData.imgUrl} onChange={imageSelected} />
            )}
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
