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
import Orders from "./components/Orders";
import AdminLogin from "./pages/AdminLogin";
import ManageProduct from "./components/ManageProduct";
import Login from "./pages/Login";

function App() {
  const { token, role } = useSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index={true} element={<>Home</>} />
          <Route path="/about" element={<>About</>} />
          {token ? null : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<>Sign Up</>} />
            </>
          )}
          {token && <Route path="/cart" element={<>Add To Cart</>} />}
          {token && <Route path="/orders" element={<>Orders</>} />}
          {token && <Route path="/checkout" element={<>Checkout</>} />}
          <Route path="/products" element={<>Products</>} />
          <Route path="/login" element={<>Login</>} />
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
              <Route path="/admin/orders" element={<Orders />} />
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
