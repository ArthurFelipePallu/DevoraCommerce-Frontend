import "./styles.css";
import { CatalogProductDTO } from "../../Models/CatalogProduct";
import { Link } from "react-router-dom";

type Props = {
  catalogproductProp: CatalogProductDTO;
};

export default function CatalogCard({ catalogproductProp }: Props) {
  return (
    <Link to={'/product-details/'} >
      <div className="devcom-catalog-card ">
        <div className="devcom-catalog-card-top">
          <img src={catalogproductProp.imgUrl} alt="computer" />
        </div>
        <div className="devcom-catalog-card-bottom">
          <h3 className="devcom-product-price">
            {" "}
            R$ {catalogproductProp.price.toFixed(2)}
          </h3>
          <h4 className="devcom-product-name">
            {catalogproductProp.description}{" "}
          </h4>
        </div>
      </div>
    </Link>
  );
}
