import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import AdminLogin from "./pages/AdminLogin";
import ManageProduct from "./components/ManageProduct";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import AddVolunteer from "./components/AddVolunteer";
import DonateMedicine from "./components/DonateMedicine";
import AllProducts from "./pages/AllProducts";
// import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import ViewProduct from "./components/ViewProduct";
import Checkout from "./components/Checkout";
import PlaceOrder from "./components/PlaceOrder";
import AllOrders from "./components/AllOrders";
import ManageOrders from "./components/ManageOrders";

function App() {
  const { token, role } = useSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/medicines" element={<AllProducts />} />
          <Route path="/medicines/:id" element={<ViewProduct />} />
          {token ? null : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>} />
            </>
          )}
          {/* {token && <Route path="/cart" element={<Cart />} />} */}
          {token && (
            <Route path="/become-volunteer" element={<AddVolunteer />} />
          )}
          {token && (
            <Route path="/donate" element={<DonateMedicine />} />
          )}
          {token && <Route path="/confirm-order" element={<PlaceOrder />} />}
          {token && <Route path="/orders" element={<AllOrders />} />}
          {token && <Route path="/checkout" element={<Checkout />} />}
          <Route path="/products" element={<>Products</>} />
        </Route>
        <Route
          path="/admin"
          element={token && role == "ADMIN" ? <AdminLayout /> : <AdminLogin />}
        >
          {token && role == "ADMIN" ? (
            <>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/orders" element={<ManageOrders />} />
              <Route
                path="/admin/manage-product/:id"
                element={<ManageProduct />}
              />
            </>
          ) : null}
        </Route>
        <Route path="/*" element={<>Page Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
