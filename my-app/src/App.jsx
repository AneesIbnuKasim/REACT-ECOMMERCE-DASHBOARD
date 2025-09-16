import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
import ErrorBoundary from "./components/ErrorBoundary";


export default function App() {
  return (
    <>
    <ErrorBoundary>
    <Navbar/>
    <div className="pt-16 mx-16">
    <Suspense fallback={<div>Loading page...</div>}>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/products/:id" element={<ProductDetails/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    </Routes>
    </Suspense>
    </div>
    </ErrorBoundary>
    </>
  )
}