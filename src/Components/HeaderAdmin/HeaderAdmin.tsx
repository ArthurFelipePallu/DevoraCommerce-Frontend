import "./styles.css";
import ProductIcon from "../ProductIcon";

export default function HeaderAdmin() {


  return (
    <header className="devcom-header-admin">
      <nav className="devcom-container">
          <h1>DEVORA COMMERCE</h1>

        <div className="devcom-navbar-right">
          <ProductIcon />

          <div className="admin-loged-user">
            <p>Maria</p>
            <a href="#">Sair</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
