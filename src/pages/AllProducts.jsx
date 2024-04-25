import axios from "axios";
import React, { useEffect, useState } from "react";

function AllProducts() {
  const [medicines, setMedicines] = useState();
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    await axios
      .get("http://localhost:8081/products/all", {})
      .then((res) => {
        console.log(res.data);
        setMedicines(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-16">
      <div className="flex flex-row justify-between my-6">
        <h1 className="font-bold text-2xl">All Medicines</h1>
        <input
          className="px-2 py-1 w-1/4 border outline-none focus:border-indigo-500 hover:border-indigo-500 rounded bg-slate-100"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="my-4 grid grid-flow-row grid-cols-4 gap-8">
        {/* Product Cart */}
        {medicines
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search) || item.brand.toLowerCase().includes(search) || item.category.categoryName.toLowerCase().includes(search);
          })
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-1 h-fit w-fit bg-slate-100 rounded p-2 border"
            >
              <div className="h-56 w-56">
                <img
                  className="h-full w-full object-cover bg-cover"
                  src={item.imageUrl}
                  alt="medicine-image"
                />
              </div>
              <div className="py-2 pr-4 space-y-1">
                <h1 className="font-semibold">{item.title}</h1>
                <div className="flex justify-between">
                  <p className="text-sm">{item.category.categoryName}</p>
                  <p className="text-sm">In Stock</p>
                </div>
              </div>
            </div>
          ))}

        {/* Product Cart End */}
      </div>
    </div>
  );
}

export default AllProducts;
