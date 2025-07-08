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
import * as cartService from "./services/cart-service";
import * as authService from "./services/auth-service";
import { ContextCartCount } from "./utils/context-cart";
import { PrivateRoute } from "./Components/PrivateRoute";
import ProductDetails from "./routes/Home/ProductDetails";
import ConfirmationPage from "./routes/Home/Confirmation";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccessTokenPayloadDTO } from "./Models/Authentication/auth";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import ProductListing from "./routes/Admin/ProductsListing";
import ProductForm from "./routes/Admin/ProductForm";
import NewProductForm from "./routes/Admin/NewProductForm";

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
              
              <Route path="confirmation/:orderId" element={
                <PrivateRoute>
                  <ConfirmationPage />
                </PrivateRoute>
              } />
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
              <Route index element={<Navigate to="home" />} />
              <Route path="home" element={<AdminHome />} />
              <Route path="cart" element={<Cart />} />
              <Route path="products" element={<ProductListing />} />
              <Route path="products/:productId" element={<NewProductForm />} />
            </Route>
            //////////////////////////////////////////////////
            <Route path="*" element={<Navigate to="/admin/" />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
