import "./styles.css";
import laptopImg from "../../assets/laptop.png";    

export default function CatalogCard() {
  return (
    <div className="devcom-catalog-card ">
      <div className="devcom-catalog-card-top">
        <img src={laptopImg} alt="computer" />
      </div>
      <div className="devcom-catalog-card-bottom">
        <h3 className="devcom-product-price"> R$ 5.000,00</h3>
        <h4 className="devcom-product-name">
          Computador Gamer XT com suporte e 16GB de memória e processador
        </h4>
      </div>
    </div>
  );
}
