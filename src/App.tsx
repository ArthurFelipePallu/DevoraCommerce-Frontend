import { Link } from "react-router-dom";
import "./App.css";
//import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <div>
    <h1>BookKeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/catalog">Catalog</Link> |{" "}
      <Link to="/product-details">Product Details</Link>
    </nav>
  </div>
  );
}

export default App;
