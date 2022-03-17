import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./context/cart.context";
import { ProductsProvider } from "./context/product.context";
import { UserProvider } from "./context/user.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          {/* Products provider will have acces to user state but not the other way around */}
          <CartProvider>
            {/* Cart context will have access to both user and products */}
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
