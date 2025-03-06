import "./styles.css"

type ErrorData ={
    errorOcurred:boolean;
    errorMessage:string;
}

export default function FormErrorMessage(error: ErrorData){

    if(!error.errorOcurred) return null;
    return <h5 className="form-filter-input-error">{error.errorMessage}</h5>;

}