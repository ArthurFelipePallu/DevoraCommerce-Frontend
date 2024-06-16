import "./styles.css";
import CategoryCard from "../CategoryCard";
import { ProductDTO } from "../../Models/product";

type Props = {
  product: ProductDTO;
};

export default function ProductDetailsCard({ product }: Props) {
  return (
    <div className="devcom-card">
      <div className="detalhes-card-top">
        <img src={product.imgUrl} alt="Computador Gamer XT"></img>
      </div>
      <div className="detalhes-card-bottom">
        <h3 className="devcom-product-price">R$: {product.price}</h3>
        <h4 className="devcom-product-name">{product.name}</h4>
        <p className="detalhes-product-description">{product.description}</p>
        <div className="detalhes-category-container">

          {
            product.categories.map(item => (
              <CategoryCard key={item.id} name={item.name} />    
            ))
          }
        </div>
      </div>
    </div>
  );
}
