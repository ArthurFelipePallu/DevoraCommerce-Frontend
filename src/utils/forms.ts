
///Gera um novo Objeto do formulário onde o campo de nome "name" seja atualizado com o valor "newValue"
export function update( inputs:any , name:string , newValue:any )
{
    return { ...inputs, [name]: {...inputs[name],value:newValue } };
}


export function updateAll( inputs : any , newValues : any)
{
    const data: any = {};
    for(const name in inputs){

        data[name] = { ...inputs[name], value : newValues[name]  };
    }
    return data;
}

///percorre a lista de inputs do form e cria um novo objeto
/// com os nomes do input e seu valor atribuído
/// Utilizado para "enxugar" a lista do form para apenas os valores necessários
/// ainda mais se forem para ser utilizados no backend
export function toValues(inputs:any)
{
    const data: any = {};
    for(const name in inputs){

        data[name] = inputs[name].value;
    }
    return data;
}

/// utiliza a função de validação do próprio campo ( se tiver )
/// para verificar a veracidade dos dados contido no campo value
/// e adiciona um novo campo ao input especifico dizendo se o valor 
/// dele é INVÁLIDO
export function validate(inputs : any , name : string)
{
    /// Verifica se campo do forms possui função de validação
    if( !inputs[name].validation ) return inputs;

    const isInvalid = !inputs[name].validation( inputs[name].value );

   return {...inputs, [name] : {...inputs[name], invalid : isInvalid.toString() } };
}