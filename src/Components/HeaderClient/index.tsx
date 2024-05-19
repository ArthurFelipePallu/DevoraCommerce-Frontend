import carrinhoIcon from '../../assets/carrinho.png';


export default function HeaderClient() {
    return (
        <header className="devcom-header-client">
            <nav className="devcom-container">
                <h1>DEVORA COMMERCE</h1>

                <div className="devcom-navbar-right">
                    <div className="devcom-menu-item">
                        <img src={carrinhoIcon} alt="Admin"></img>
                    </div>
                    <div className="devcom-nav-divs">
                        <a href="">Entrar</a>
                    </div>

                </div>


            </nav>
        </header>


    );
}