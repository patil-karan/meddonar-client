import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  setCartId,
  setCartPower,
  setCartQuantity,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function ViewProduct() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [power, setPower] = useState(1);

  const orderHandler = (productId) => {
    localStorage.setItem("productId", productId);
    localStorage.setItem("cartQuantity", quantity);
    localStorage.setItem("cartPower", power);
    dispatch(setCartId(productId));
    dispatch(setCartQuantity(quantity));
    dispatch(setCartPower(power));
    navigate("/checkout");
  };

  const fetchData = async () => {
    await axios
      .get(`http://localhost:8081/products/id/${pathname.substring(11)}`, {})
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setPower(res.data.powers[0].powers);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product?.imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              TITLE NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-xl title-font font-medium mb-1">
              {product?.brand}
            </h1>

            <p className="leading-relaxed">{product?.discription}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center">
                <span className="mr-2">Qty:</span>
                <input
                  type="number"
                  className="w-20 rounded outline-none p-1 text-center border border-indigo-200"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Powers</span>
                <div className="relative">
                  <select
                    onChange={(e) => setPower(e.target.value)}
                    value={power}
                    className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10"
                  >
                    {product?.powers.map((item, idx) => (
                      <option key={idx} value={item?.powers}>
                        {item?.powers}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
              <span className="ml-4">{product?.quantity} left</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                Free
              </span>
              <button
                onClick={() => orderHandler(product?.id, quantity)}
                className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
              >
                Order
              </button>
              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProduct;
