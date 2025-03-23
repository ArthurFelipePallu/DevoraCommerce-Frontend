import "./styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextToken } from "../../utils/context-API";
import * as AuthService from "../../services/auth-service";
import { history } from "../../utils/history";


export default function LoggedUser() {

    
    const { contextTokenPayload ,setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick()
    {
        AuthService.logout();
        setContextTokenPayload(undefined);
        history.push("/catalog");
    }


  return ( 
            contextTokenPayload &&
            AuthService.isAuthenticated() ?   
                                    (
                                        <div className="logged-user">
                                            <p className="logged-user-name">{contextTokenPayload.user_name}</p>
                                            <span
                                                className="logged-user-quit" 
                                                onClick={handleLogoutClick}>  
                                                Sair  
                                            </span>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="devcom-nav-divs">
                                            <Link to="/login">Entrar</Link>
                                        </div>
                                    )
                                
        );
}

