
import "./App.css";
import AdminUserPage from "./pages/Admin/AdminUserPage";
import HomePage from "./pages/HomePage";
 import CartPage from './pages/CartPage'
import { Route, Routes } from "react-router-dom";

import ProductDetailsPage from './pages/ProductDetailsPage'
 import BlogPage from './pages/BlogPage'
 import ShopPage from './pages/ShopPage'
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import BlogDetailsPage from "./pages/BlogDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AccountPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} /> 
      <Route path="/admin/*" >
        <Route path="users" element={<AdminUserPage />} />
      </Route>
     

    </Routes>
  );
}

export default App;
