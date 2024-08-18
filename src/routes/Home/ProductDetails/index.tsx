import "./styles.css";
import BlueButton from "../../../Components/Buttons/BlueButton";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import ProductDetailsCard from "../../../Components/ProductDetailsCard";
import { ButtonDTO } from "../../../Models/button";
import * as ProductService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../Models/product";

const blueButton: ButtonDTO = {
  id: 1,
  name: "Adquirir",
  path: "Leads to Nowhere",
};
const whiteButton: ButtonDTO = {
  id: 2,
  name: "Tela Inicial",
  path: "Leads to Nowhere",
};
export default function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    ProductService.findById(Number(params.productId))
    .then(response => {
      setProduct(response.data);
    });
  }, []);
  return (
    <>
      <main>
        <section id="product-detail" className="devcom-container">
          {product && <ProductDetailsCard product={product} />}

          <BlueButton button={blueButton} />

          <Link to="/">
            <WhiteButton button={whiteButton} />
          </Link>
        </section>
      </main>
    </>
  );
}
