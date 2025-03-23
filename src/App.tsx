import "./App.css";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Cart from "./routes/Home/Cart";
import Login from "./routes/Home/Login";
import { history } from "./utils/history";
import Catalog from "./routes/Home/Catalog";
import { useEffect, useState } from "react";
import AdminHome from "./routes/Admin/AdminHome";
import NumberForm from "./routes/Home/NumberForn";
import { ContextToken } from "./utils/context-API";
import * as authService from "./services/auth-service";
import { ContextCartCount } from "./utils/context-cart";
import { PrivateRoute } from "./Components/PrivateRoute";
import ProductDetails from "./routes/Home/ProductDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccessTokenPayloadDTO } from "./Models/Authentication/auth";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import * as cartService from "./services/cart-service";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {

    setContextCartCount(cartService.FindTotalItemsInCart());

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <ContextCartCount.Provider
        value={{ contextCartCount, setContextCartCount }}
      >
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route
                path="product-details/:productId"
                element={<ProductDetails />}
              />
              <Route path="number-form" element={<NumberForm />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
            </Route>
            /////////////////////////////////////////////////
            <Route
              path="/admin/"
              element={
                <PrivateRoute roles={["ROLE_ADMIN"]}>
                  <Admin />
                </PrivateRoute>
              }
            >
              <Route index element={<AdminHome />} />
            </Route>
            //////////////////////////////////////////////////
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
