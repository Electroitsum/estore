import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./utilities/Navbar";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />}></Route>
    
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart/:id" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default Router;
