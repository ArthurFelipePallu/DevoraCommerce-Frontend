import { Link } from "react-router-dom";
import "./styles.css";
import CartIcon from "../CartIcon";
import ConfigIcon from "../ConfigIcon";

export default function HeaderClient() {
  return (
    <header className="devcom-header-client">
      <nav className="devcom-container">
        <Link to="/">
          <h1>DEVORA COMMERCE</h1>
        </Link>

        <div className="devcom-navbar-right">

          
          <ConfigIcon />
          <CartIcon />

          <div className="devcom-nav-divs">
            <Link to="/login">Entrar</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
