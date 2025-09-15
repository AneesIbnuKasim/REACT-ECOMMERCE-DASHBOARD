import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <>
    <ErrorBoundary>
    <Navbar/>
    <div className="pt-16">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/products/:id" element={<ProductDetails/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    </Routes>
    </div>
    </ErrorBoundary>
    </>
  )
}