import "./styles.css"
import BlueButton from "../../Components/Buttons/BlueButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import HeaderClient from "../../Components/HeaderClient";
import ProductDetailsCard from "../../Components/ProductDetailsCard";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-detail" className="devcom-container">
          <ProductDetailsCard />

          <BlueButton />

          <WhiteButton />
        </section>
      </main>
    </>
  );
}
