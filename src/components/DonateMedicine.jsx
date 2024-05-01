import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import { getAxiosInstance } from "../utility/axiosApiConfig";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DonateMedicine() {
  // const navigate = useNavigate(); 
  // const handleVolunteerClick = () => {
  //   toast.success("Thank You For Donations!", {
  //     position: "top-right",
  //     autoClose: 3000, // Close the toast after 3 seconds
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  //   navigate('/'); 
  // };

  const axiosInstance = getAxiosInstance();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);

    try {
      await axiosInstance
        .post("http://localhost:8081/api/users/donateMedicine", {
          medicineName: formData.get("medicine-name"),
          brand: formData.get("brand"),
          power: formData.get("power"), // Corrected field name
          quantity: formData.get("quantity"),
          category: formData.get("category"),
          email: formData.get("email"),
          mobile: formData.get("mobile"),
          donarDetail: formData.get("donarDetail"),
        })
        .then((res) => {
          if (res.status === 201) {
            toast.success("Thank You for Donation!", {
              duration: 4000,
              position: "bottom-right",
            });
          }
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
          Donate Medicine
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          You made a greate choice
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-xl sm:mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Medicine Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="medicine-name"
                id="medicine-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Brand
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="brand"
                id="brand"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Medicine Power
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="power"
                id="power"
                autoComplete="given-power"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Medicine Quantity
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="quantity"
                id="quantity"
                autoComplete="given-quantity"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="category"
                id="category"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
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
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="donarDetail"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Donar details with location
            </label>
            <div className="mt-2.5">
              <textarea
                name="donarDetail"
                id="donarDetail"
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
            // onClick={handleVolunteerClick} 
          >
            Donate Medicine
          </button>
        </div>
      </form>
    </div>
  );
}
