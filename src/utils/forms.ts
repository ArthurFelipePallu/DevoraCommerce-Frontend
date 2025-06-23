
///Gera um novo Objeto do formulário onde o campo de nome "name" seja atualizado com o valor "newValue"
export function update( inputs:any , name:string , newValue:any )
{
    return { ...inputs, [name]: {...inputs[name],value:newValue } };

}