///Gera um novo Objeto do formulário onde o campo de nome "name" seja atualizado com o valor "newValue"
export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function updateAll(inputs: any, newValues: any) {
  const data: any = {};
  for (const name in inputs) {
    data[name] = { ...inputs[name], value: newValues[name] };
  }
  return data;
}

///percorre a lista de inputs do form e cria um novo objeto
/// com os nomes do input e seu valor atribuído
/// Utilizado para "enxugar" a lista do form para apenas os valores necessários
/// ainda mais se forem para ser utilizados no backend
export function toValues(inputs: any) {
  const data: any = {};
  for (const name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}

/// utiliza a função de validação do próprio campo ( se tiver )
/// para verificar a veracidade dos dados contido no campo value
/// e adiciona um novo campo ao input especifico dizendo se o valor
/// dele é INVÁLIDO
export function validate(inputs: any, name: string) {
  /// Verifica se campo do forms possui função de validação
  if (!inputs[name].validation) return inputs;

  const isInvalid = !inputs[name].validation(inputs[name].value);

  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: isInvalid.toString() },
  };
}

export function updateAndValidate(inputs: any, name: string, newValue: any) {
  const updated = update(inputs, name, newValue);
  return validate(updated, name);
}

//Gera um novo objeto de formulário contendo o campo "Dirty" (booleano) para o campo
// do formulário que está sendo alterado.
export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: "true" } };
}

export function dirtyAndValidate(inputs: any, name: string) {
  const dirty = toDirty(inputs, name);
  return validate(dirty, name);
}

export function toDirtyAll(inputs: any) {
  const newInputs: any = {};

  for (var name in inputs) {
    newInputs[name] = { ...inputs[name], dirty: "true" };
  }
  return newInputs;
}

export function validateAll(inputs: any) {
  const newInputs: any = {};

  for (var name in inputs) {
    /// Verifica se campo do forms possui função de validação
    if (!inputs[name].validation) {
      newInputs[name] = { ...inputs[name] };
    } else {
      const isInvalid = !inputs[name].validation(inputs[name].value);
      newInputs[name] = { ...inputs[name], invalid: isInvalid.toString() };
    }
  }
  return newInputs;
}

export function dirtyAndValidateAll(inputs: any)
{
    return validateAll(toDirtyAll(inputs));    
}

export function hasAnyInvalid(inputs : any)
{
    for(var name in inputs)
    {
        if(inputs[name].dirty === "true" && inputs[name].invalid === "true" ) return true;
    }

    return false;
}


export function setBackEndErrors(inputs : any , errors : any[] )
{
  const newInputs = {...inputs};

  errors.forEach(item => {
    newInputs[item.fieldName].message = item.message;
    newInputs[item.fieldName].dirty = "true";
    newInputs[item.fieldName].invalid = "true";
  });
 
  return newInputs;
}