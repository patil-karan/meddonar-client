import React from "react";

const tableItems = [
  {
    name: "Solo learn app",
    date: "Oct 9, 2023",
    status: "Placed",
    quantity: "12",
    power: "100",
  },
  {
    name: "Window wrapper",
    date: "Oct 12, 2023",
    status: "Placed",
    quantity: "35",
    power: "100",
  },
  {
    name: "Unity loroin",
    date: "Oct 22, 2023",
    status: "Delivered",
    quantity: "8",
    power: "200",
  },
  {
    name: "Background remover",
    date: "Jan 5, 2023",
    status: "Placed",
    quantity: "25",
    power: "100",
  },
  {
    name: "Colon tiger",
    date: "Jan 6, 2023",
    status: "Placed",
    quantity: "50",
    power: "200",
  },
];

function ManageOrders() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Orders
          </h3>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Name</th>
              <th className="py-3 pr-6">Date</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Power</th>
              <th className="py-3 pr-6">Quantity</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.status == "Delivered"
                        ? "text-green-600 bg-green-50"
                        : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
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

export default ManageOrders;
