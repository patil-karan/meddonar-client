import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAxiosInstance } from "../utility/axiosApiConfig";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const { id, quantity, power, shippingAddress } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const axiosInstance = getAxiosInstance();
  const [data, setData] = useState(null);
  const [address, setAddress] = useState(null);

  const placeOrderHandler = async () => {
    // localStorage.removeItem("productId");
    // localStorage.removeItem("cartQuantity");
    // localStorage.removeItem("cartPower");
    console.log({
      addressId: Number(shippingAddress),
      productId: Number(id),
      power: Number(power),
      quantity: Number(quantity),
    });
    await axiosInstance
      .post(`http://localhost:8081/api/orders/create`, {
        addressId: Number(shippingAddress),
        productId: Number(id),
        power: Number(power),
        quantity: Number(quantity),
      })
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Order Placed!",
          text: "Thank you for ordering!",
          icon: "success",
          button: "OK",
        });
        navigate("/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchData = async () => {
    await axios
      .get(`http://localhost:8081/products/id/${id}`, {})
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        // setPower(res.data.powers[0].powers);
      })
      .catch((err) => {
        console.log(err);
      });
    await axiosInstance
      .get(`http://localhost:8081/api/users/getAddress/${shippingAddress}`, {})
      .then((res) => {
        console.log(res.data);
        setAddress(res.data);
        // setPower(res.data.powers[0].powers);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="py-6 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Order Summary
          </h1>
        </div>
        <div className="mt-6 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Your Order
              </p>
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={data?.imageUrl}
                    alt="medicine"
                  />
                  <img
                    className="w-full md:hidden"
                    src={data?.imageUrl}
                    alt="medicine"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      {data?.title}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Brand:{" "}
                        </span>{" "}
                        {data?.brand}
                      </p>
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Category:{" "}
                        </span>{" "}
                        {data?.category.categoryName}
                      </p>
                      <p className="text-sm dark:text-white leading-none text-gray-800">
                        <span className="dark:text-gray-400 text-gray-300">
                          Power:{" "}
                        </span>{" "}
                        {power}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-8 items-start w-full">
                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                      Quantity: {quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                      {address?.firstName + " " + address?.lastName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                      {address?.firstName + " " + address?.lastName}
                    </p>
                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                      {address?.streetAddress}
                    </p>
                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                      {address?.city +
                        ", " +
                        address?.state +
                        ", " +
                        address?.zipCode}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex w-full justify-center items-center md:justify-start md:items-start">
                  <button
                    onClick={placeOrderHandler}
                    className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
