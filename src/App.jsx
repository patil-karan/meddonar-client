import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/Dashboard";

function App() {
  const {token, role} = useSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index={true} element={<>Home</>} />
          <Route path="/about" element={<>About</>} />
          {token ? null : 
            <>
              <Route path="/login" element={<>Login</>} />
              <Route path="/signup" element={<>Sign Up</>} />
            </>
          }
          {token && <Route path="/cart" element={<>Add To Cart</>} />}
          {token && <Route path="/orders" element={<>Orders</>} />}
          {token && <Route path="/checkout" element={<>Checkout</>} />}
          <Route path="/products" element={<>Products</>} />
          <Route path="/login" element={<>Login</>} />
        </Route>
        <Route path="/admin" element={token && role === "ADMIN,USER" ? <AdminLayout /> : <>Admin Login</> }>
          <Route index element={<Dashboard />} />
          <Route path="/admin/add-product" element={<>Add Product</>} />
          <Route path="/admin/products" element={<>Products</>} />
          <Route path="/admin/orders" element={<>Orders</>} />
          <Route path="/admin/manage-product" element={<>Manage Product</>} />
        </Route>
        <Route path="/*" element={<>Page Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
