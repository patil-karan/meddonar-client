import React from "react";
import toast from "react-hot-toast";
import { getAxiosInstance } from "../utility/axiosApiConfig";
import { useDispatch } from "react-redux";
import { setShippingAddress } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosInstance = getAxiosInstance();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);

    try {
      await axiosInstance
        .post("http://localhost:8081/api/users/addAddress", {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          city: formData.get("city"),
          state: formData.get("state"),
          mobile: formData.get("mobile"),
          streetAddress: formData.get("address"),
          zipCode: formData.get("zipCode"),
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("shippingAddress", res.data.id);
          dispatch(setShippingAddress(res.data.id));
          navigate("/confirm-order");
          toast.success("Address Added Succesfully");
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Internal Server Error!", {
        duration: 4000,
        position: "bottom-right",
      });
    }
  };
  return (
    <div className="isolate my-8 bg-white px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Checkout Order
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          You made a greate choice !
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-xl sm:mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="firstName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="lastName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="city"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              State
            </label>
            <div className="mt-2.5">
              <input
                type="state"
                name="state"
                id="state"
                autoComplete="state"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="mobile"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="mobile"
                id="mobile"
                autoComplete="mobile"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="zipCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Zip Code
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                autoComplete="zipCode"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2.5">
              <textarea
                name="address"
                id="address"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
