import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAxiosInstance } from "../utility/axiosApiConfig";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ManageProduct() {
  const { pathname } = useLocation();
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [power, setPower] = useState([]);
  const addPowerHandler = () => {
    setPower([...power, { powers: 0, quantity: 0 }]);
  };

  const removePowerHandler = (index) => {
    const newPower = [...power];
    newPower.splice(index, 1);
    setPower(newPower);
  };

  const inputChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const newPower = [...power];
    newPower[index][name] = Number(value);
    setPower(newPower);
  };

  const updateProductHandler = async () => {
    const productData = {
      imageUrl,
      title,
      brand,
      quantity: Number(quantity),
      categoryName,
      description,
      power,
    };
    console.log(productData);
    // Axios request
    const axiosInstance = getAxiosInstance();
    try {
      const response = await axiosInstance.put(
        `http://localhost:8081/api/admin/product/${pathname.substring(
          22
        )}/product`,
        productData
      );
      console.log(response.data);
      toast.success("Product Updated Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Update Failed");
    }
  };

  const fetchData = async () => {
    const axiosInstance = getAxiosInstance();
    await axiosInstance
      .get(`http://localhost:8081/api/products/id/${pathname.substring(22)}`)
      .then((res) => {
        setImageUrl(res.data.imageUrl);
        setTitle(res.data.title);
        setBrand(res.data.brand);
        setQuantity(res.data.quantity);
        setCategoryName(res.data.category.categoryName);
        setDescription(res.data.discription);
        setPower([...res.data.powers]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-gray-800 mb-4 text-xl font-bold sm:text-2xl">
        Update Existing Product
      </h2>
      <div className="flex flex-col justify-center bg-white shadow">
        <h3 className="border-b py-4 px-7 text-lg font-medium">
          Medicine Information
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-5 p-7">
            <div>
              <label
                htmlFor="imgurl"
                className="block mb-3 text-black dark:text-white"
              >
                Image URL
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                placeholder="Image URL"
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
                value={imageUrl}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-3 text-black dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block mb-3 text-black dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Brand"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  value={brand}
                />
              </div>

              {/* <div>
                <label
                  htmlFor="color"
                  className="block mb-3 text-black dark:text-white"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  value={color}
                />
              </div> */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-3 text-black dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                  placeholder="Quantity"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  value={quantity}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Category"
                className="block mb-3 text-black dark:text-white"
              >
                Category
              </label>
              <select
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
                defaultValue={categoryName}
                value={categoryName}
              >
                <option value="">Select</option>
                <option value="Thyroid">Thyroid</option>
                <option value="Cancer">Cancer</option>
                <option value="AIDs">AIDs</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Covid-19">Covid-19</option>
                <option value="Malaria">Malaria</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="desciption"
                className="block mb-3 text-black dark:text-white"
              >
                Desciption
              </label>
              <textarea
                type="text"
                className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500 resize-none"
                placeholder="Desciption"
                rows={5}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </div>
            <div className="flex justify-between items-center -mx-8">
              <h3 className="border-b py-4 px-7 text-lg font-medium">
                Medicines
              </h3>
              <button
                onClick={(e) => addPowerHandler(e)}
                className="px-3 py-2 mr-8 border-none outline-none text-white rounded bg-indigo-500"
              >
                Add Power
              </button>
            </div>

            {power.map((data, idx) => {
              return (
                <div
                  className="flex items-center justify-between gap-x-5 mt-4"
                  key={idx}
                >
                  <div>
                    <label
                      htmlFor="powers"
                      className="block mb-3 text-black dark:text-white"
                    >
                      Powers
                    </label>
                    <input
                      type="number"
                      name="powers"
                      value={data.powers}
                      onChange={(e) => inputChangeHandler(e, i)}
                      className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                      placeholder="powers"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block mb-3 text-black dark:text-white"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={data.quantity}
                      onChange={(e) => inputChangeHandler(e, i)}
                      className="w-full px-5 py-3 outline-none border rounded hover:border-indigo-500 focus:border-indigo-500"
                      placeholder="Quantity"
                    />
                  </div>
                  <button
                    onClick={() => removePowerHandler(i)}
                    className="self-end mb-2 px-3 py-2 border-none outline-none text-white rounded bg-red-500"
                  >
                    Remove
                  </button>
                </div>
              );
            })}

            <div className="flex gap-5 mt-4">
              <button
                onClick={updateProductHandler}
                className=" px-5 py-3 border-none outline-none text-white rounded bg-indigo-500"
              >
                Update Product
              </button>
              <button
                type="reset"
                className=" px-5 py-3 border-none outline-none text-white rounded bg-red-500"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageProduct;
