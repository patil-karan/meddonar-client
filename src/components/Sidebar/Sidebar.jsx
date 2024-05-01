import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { menuItemsAdmin } from "./SidebarData";
import { FaRightFromBracket } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { setToken, setRole, setUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(setToken(null));
    dispatch(setRole(null));
    dispatch(setUser(null));
    toast.success("Logout Successful");
  };

  return (
    <div
      className={`${
        open ? "w-72" : "w-22"
      } flex flex-col justify-between duration-500 p-5 pt-8 bg-black relative`}
    >
      <div>
        <span
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 px-2 py-1 duration-500 bg-white border-dark ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronLeft className="text-dark w-full" />
        </span>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium ${
              !open ? "scale-x-0" : "scale-x-100"
            } duration-300`}
          >
            MedDonor
          </h1>
        </div>
        <ul className="flex flex-col gap-4 pt-6">
          {menuItemsAdmin.map((menu, index) => (
            <div key={index}>
              <NavLink
                to={menu.path}
                title={menu.title}
                className={`h-10 flex items-center gap-x-4 cursor-pointer py-2 duration-300 rounded-md ${
                  location.pathname === menu.path
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-900"
                }`}
              >
                <div className="">{<menu.icon className="w-15" />}</div>
                <span
                  className={`${
                    !open ? "scale-x-0" : "scale-x-100"
                  } origin-left duration-300`}
                >
                  {menu.title}
                </span>
              </NavLink>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <Link
          onClick={logoutHandler}
          to={"/"}
          className={`h-10 flex items-center gap-x-4 cursor-pointer py-2 duration-300 rounded-md bg-slate-900 text-red-500`}
        >
          <FaRightFromBracket className="w-10" />
          <span
            className={`${
              !open ? "scale-x-0" : "scale-x-100"
            } origin-left duration-300`}
          >
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
