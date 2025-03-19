import "./styles.css";
import { Link } from "react-router-dom";
import configIcon from "../../assets/configuracoes.png";
import * as AuthService from "../../services/auth-service";

export default function ConfigIcon() {
  return (
          <>    
            {
                AuthService.hasAnyRoles(["ROLE_ADMIN"]) &&
                <div className="devcom-header-menu-item">
                  <Link to="/admin">
                    <img src={configIcon} alt="Admin"></img>
                  </Link>
                </div>
            }
          </>

          );
          
}