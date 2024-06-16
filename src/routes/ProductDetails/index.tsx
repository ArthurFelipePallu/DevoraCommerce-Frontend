import "./styles.css";
import BlueButton from "../../Components/Buttons/BlueButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import HeaderClient from "../../Components/HeaderClient";
import ProductDetailsCard from "../../Components/ProductDetailsCard";
import { ProductDTO } from "../../Models/product";
import { ButtonDTO } from "../../Models/button";

const product: ProductDTO = {
  id: 2,
  name: "Smart Tv",
  description: "Um televisor muito bom",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Computadores",
    },
    {
      id: 3,
      name: "Eletrônicos",
    },
    {
      id: 4,
      name: "Importados",
    },
    {
      id: 5,
      name: "Diferenciado",
    },
  ],
};
const blueButton: ButtonDTO = {
  id: 1,
  name: "Adquirir",
  path: "Leads to Nowhere"
};
const whiteButton: ButtonDTO = {
  id: 2,
  name: "Tela Inicial",
  path: "Leads to Nowhere"
};
export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-detail" className="devcom-container">
          <ProductDetailsCard product={product} />

          <BlueButton button={blueButton} />

          <WhiteButton button={whiteButton} />
        </section>
      </main>
    </>
  );
}
