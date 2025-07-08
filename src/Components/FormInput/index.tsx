export default function FormInput(props:any)
{

    const {validation ,invalid, ...inputProps } = props;


    ///   * data-invalid -> está criando um atributo adicional dentro do elemento input com nome "data-invalid" 
    ///e estabelecendo seu valor com o recebido dentro de invalid. Esta é a forma adequada de acrescentar dados no seu elemento DOM
    /// (prefixo 'data-' importante  ) pois vira um data set para trabalhar o elemento

    return( 
        <>
            <input {...inputProps} data-invalid ={invalid}  />
        </>
    );
}