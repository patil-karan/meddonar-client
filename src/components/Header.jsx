import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="h-16 sticky top-0 z-10 px-10 shadow-md bg-white w-full flex justify-between items-center">
      <p className="font-bold">DASHBOARD</p>
      <div className="flex items-center space-x-3">
        <FaCircleUser fontSize={30} />
        <span>{user}</span>
      </div>
      {/* <div
          className="h-full flex items-center justify-end md:justify-between px-6"
        >
          <div className="font-semibold max-md:hidden uppercase text-dark tracking-wide font-opensans">
            Dashboard
          </div>
          <div className="flex p-2 rounded-lg cursor-pointer">
            <FaCircleUser className="text-3xl text-dark" />
            <span className="ml-4 text-dark font-mulish font-semibold">
              Karan Patil
            </span>
          </div>
        </div> */}
    </div>
  );
};

export default Header;
