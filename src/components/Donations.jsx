import React, { useEffect, useState } from "react";
import { getAxiosInstance } from "../utility/axiosApiConfig";

// const tableItems = [
//   {
//     name: "Ecosprin",
//     date: "Apr 9, 2024",
//     status: "Placed",
//     quantity: "12",
//     power: "100",
//   },
//   {
//     name: "Thyrium",
//     date: "Oct 12, 2024",
//     status: "Placed",
//     quantity: "35",
//     power: "100",
//   },
//   {
//     name: "Glizid",
//     date: "Oct 22, 2023",
//     status: "Delivered",
//     quantity: "8",
//     power: "200",
//   },
//   {
//     name: "Sinus",
//     date: "Jan 5, 2023",
//     status: "Placed",
//     quantity: "25",
//     power: "100",
//   },
//   {
//     name: "Platoplus",
//     date: "Jan 6, 2023",
//     status: "Placed",
//     quantity: "50",
//     power: "200",
//   },
// ];
function Donations() {
  const [donation, setDonation] = useState();
  const axiosInstance = getAxiosInstance();
  const fetchData = async () => {
    await axiosInstance
      .get("http://localhost:8081/api/admin/user/donations", {})
      .then((res) => {
        const data = res.data;
        setDonation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Donations
          </h3>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Medicine Name</th>
              <th className="py-3 pr-6">Brand</th>
              <th className="py-3 pr-6">Category</th>
              <th className="py-3 pr-6">Email</th>
              <th className="py-3 pr-6">Power</th>
              <th className="py-3 pr-6">Quantity</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          {/* replace tableItems with donation */}
          <tbody className="text-gray-600 divide-y">
            {donation?.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.medicineName}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.brand}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.power}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="text-right whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                  >
                    Manage
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donations;
