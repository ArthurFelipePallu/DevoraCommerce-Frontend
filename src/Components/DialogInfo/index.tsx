import "./styles.css";


type Props = {
    data : SimpleModalDTO;
};

export default function SimpleModal({ data }:Props)
{
    return(
        <div className="devcom-dialog-background"  onClick={ () => { data.action() } }>
            <div className="devcom-dialog-box"  onClick={ (event) => {event.stopPropagation() }}> 
                <h2>
                    {data.message}
                </h2>
                <button className="dialog-btn" onClick={ () => { data.action() } } >
                    {data.buttonText}
                </button>
            </div>      
        
        </div>
    );
}