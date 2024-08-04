import { Link } from "react-router-dom";
import carrinhoIcon from "../../assets/carrinho.png";
import "./styles.css";

export default function HeaderClient() {
  return (
    <header className="devcom-header-client">
      <nav className="devcom-container">
        <Link to="/">
          <h1>DEVORA COMMERCE</h1>
        </Link>

        <div className="devcom-navbar-right">
          <div className="devcom-menu-item">
            <Link to="/cart">
              <img src={carrinhoIcon} alt="Admin"></img>
            </Link>
          </div>
          <div className="devcom-nav-divs">
            <Link to="/login">Entrar</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
