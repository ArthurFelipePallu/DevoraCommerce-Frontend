import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog/index.tsx";
import ProductDetails from "./routes/ProductDetails/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="product-details" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);
