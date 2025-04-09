import "./styles.css";
import LoggedUser from "../LoggedUser";
import ProductIcon from "../ProductIcon";
import { NavLink } from "react-router-dom";
import { history } from "../../utils/history";
import HomeIcon from "../HomeIcon";
export default function HeaderAdmin() {
  function goToAdminHome() {
    history.push("/admin");
  }

  return (
    <header className="devcom-header-admin">
      <nav className="devcom-container">
        <h1 className="devcom-menu-interactable" onClick={goToAdminHome}>
          DEVORA COMMERCE
        </h1>

        <div className="devcom-navbar-right" >
          <NavLink 
            to="/admin/home"
            className={({isActive}) => isActive? "admin-selected-Nav" : "admin-not-selected-Nav" }
            >
            <HomeIcon />
          </NavLink>
          <NavLink 
              to="/admin/products"
              className={({isActive}) => isActive? "admin-selected-Nav" : "admin-not-selected-Nav" }
              >
            <ProductIcon />
          </NavLink>
            <LoggedUser />

        </div>
      </nav>
    </header>
  );
}
