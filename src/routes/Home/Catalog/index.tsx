import "./styles.css";
import CatalogCard from "../../../Components/CatalogCard";
import BarradeBusca from "../../../Components/BarradeBusca";
import NextPageButton from "../../../Components/Buttons/NextPageButton";
import { CatalogProductDTO } from "../../../Models/CatalogProduct";

const productlist:CatalogProductDTO[]=[
  {
    id:1,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:2,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:3,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:4,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:5,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:6,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:7,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:8,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:9,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:10,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:11,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:12,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:13,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:14,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:15,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  },
  {
    id:16,
    price:5000,
    description:"Produto 100% confiável",
    imgUrl:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
  }
  
  
]


export default function Catalog() {
  return (
    <>

      <main>
        <section id="catalogo-section" className="devcom-container">
          <BarradeBusca />

          <div
            id="products-container"
            className="devcom-mb20 devcom-mt20 devcom-catalog-cards"
          >
            {
              productlist.map(item=>(
                <CatalogCard key={item.id} catalogproductProp ={item}/>
              ))
            }

          </div>

          <NextPageButton />
        </section>
      </main>
    </>
  );
}
