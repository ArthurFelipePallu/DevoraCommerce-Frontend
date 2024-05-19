import laptopImg from './assets/laptop.png';
import carrinhoImg from './assets/carrinho.png';

import './App.css'

function App() {
  return (
    <>
      <header className="devcom-header-client">
        <nav className="devcom-container">
          <h1>DEVORA COMMERCE</h1>

          <div className="devcom-navbar-right">
            <div className="devcom-menu-item">
              <img src={carrinhoImg} alt="Admin"></img>
            </div>
            <div className="devcom-nav-divs">
              <a href="">Entrar</a>
            </div>

          </div>


        </nav>
      </header>
      <main>
        <section id="product-detail" className="devcom-container">
          <div className="devcom-card">
            <div className="detalhes-card-top">
              <img src={laptopImg} alt="Computador Gamer XT"></img>
            </div>
            <div className="detalhes-card-bottom">
              <h3 className="devcom-product-price"> R$ 5 000, 00</h3>
              <h4 className="devcom-product-name">Computador Gamer XT</h4>
              <p className="detalhes-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="detalhes-category-container">
                <div className="detalhes-categoria">
                  Eletrônicos
                </div>
                <div className="detalhes-categoria">
                  Computadores
                </div>
              </div>
            </div>
          </div>
          <div className="devcom-btn devcom-btn-blue responsive-btn">
            Comprar
          </div>
          <div className="devcom-btn devcom-btn-white responsive-btn">
            Inicio
          </div>



        </section>

      </main>
    </>
  );

}

export default App
