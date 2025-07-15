import Select from "react-select";

export default function FormSelect(props:any)
{

    const {     
            className,
            validation,
            invalid = "false",
            dirty="false",
            onTurnDirty,
            ...selectProps 
          
            } = props;


    function handleBlur()
    {
        onTurnDirty(props.name);
    }



    ///   * data-invalid -> está criando um atributo adicional dentro do elemento input com nome "data-invalid" 
    ///e estabelecendo seu valor com o recebido dentro de invalid. Esta é a forma adequada de acrescentar dados no seu elemento DOM
    /// (prefixo 'data-' importante  ) pois vira um data set para trabalhar o elemento

    return( 
        <div        
            className={className}    
            data-dirty = {dirty}  
            data-invalid = {invalid}  
        >
        
            <Select 
                {...selectProps} 
                onBlur = {handleBlur}/>
        </div>
    );
}