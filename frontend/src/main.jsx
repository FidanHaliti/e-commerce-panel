import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layouts/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import CartProvider from "./context/cartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
  </CartProvider>
  </BrowserRouter>
);
