import "./App.css";
import BlueButton from "./Components/Buttons/BlueButton";
import WhiteButton from "./Components/Buttons/WhiteButton";
import HeaderClient from "./Components/HeaderClient";
import ProductDetailsCard from "./Components/ProductDetailsCard";

function App() {
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

export default App;
