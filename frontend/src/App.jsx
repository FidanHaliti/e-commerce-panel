
import "./App.css";
import UserPage from "./pages/Admin/UserPage";
import HomePage from "./pages/HomePage";
 import CartPage from './pages/CartPage'
import { Route, Routes } from "react-router-dom";

import ProductDetailsPage from './pages/ProductDetailsPage'
 import BlogPage from './pages/BlogPage'
 import ShopPage from './pages/ShopPage'
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
// import BlogDetails from "./components/BlogDetails/BlogDetails";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import CategoryPage from "./pages/Admin/CategoryPage";
import CategoryUpdatePage from "./pages/Admin/CategoryUpdatePage";

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
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<CategoryUpdatePage />} />
      </Route>
     

    </Routes>
  );
}

export default App;
