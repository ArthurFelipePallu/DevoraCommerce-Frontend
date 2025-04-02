import "./styles.css";
import ProductIcon from "../ProductIcon";
import LoggedUser from "../LoggedUser";
import { history } from "../../utils/history";
export default function HeaderAdmin() {

  function goToAdminHome()
  {
    history.push("/admin");
  }

  return (
    <header className="devcom-header-admin">
      <nav className="devcom-container">
          <h1 
            className="devcom-menu-interactable"
            onClick={goToAdminHome}
            >DEVORA COMMERCE</h1>

        <div className="devcom-navbar-right">
          <ProductIcon />

         <LoggedUser />
        </div>
      </nav>
    </header>
  );
}
