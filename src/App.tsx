import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Catalog from "./routes/Home/Catalog";
import ProductDetails from "./routes/Home/ProductDetails";
import Home from "./routes/Home";
import Cart from "./routes/Home/Cart";
//import ProductDetails from "./routes/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Catalog />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </BrowserRouter>
  );
}

