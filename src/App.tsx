import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Catalog from "./routes/Home/Catalog";
import ProductDetails from "./routes/Home/ProductDetails";
import Home from "./routes/Home";
//import ProductDetails from "./routes/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Catalog />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product-details/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

