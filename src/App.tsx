import "./App.css";
import { useState } from "react";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Cart from "./routes/Home/Cart";
import Login from "./routes/Home/Login";
import { history } from "./utils/history";
import Catalog from "./routes/Home/Catalog";
import AdminHome from "./routes/Admin/AdminHome";
import NumberForm from "./routes/Home/NumberForn";
import { ContextCartCount } from "./utils/context-cart";
import ProductDetails from "./routes/Home/ProductDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";


export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount,setContextCartCount}}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="number-form" element={<NumberForm/>} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          /////////////////////////////////////////////////
          <Route path="/admin/" element={<Admin />}>
            <Route index element={<AdminHome />} />
          </Route>
          //////////////////////////////////////////////////
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  );
}
