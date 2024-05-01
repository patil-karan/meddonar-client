import { FaBriefcase,FaBriefcaseMedical,FaCartShopping }  from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { BsCapsule } from "react-icons/bs";


export const menuItemsAdmin = [
  {
    title: "Dashboard",
    icon: BiSolidDashboard,
    path: "/admin",
  },
  {
    title: "Add Products",
    icon: FaBriefcaseMedical,
    path: "/admin/add-product",
  },
  {
    title: "Products",
    icon: FaBriefcase,
    path: "/admin/products",
  },
  {
    title: "Orders",
    icon: FaCartShopping,
    path: "/admin/orders",
  },
  {
    title: "Donations",
    icon: BsCapsule,
    path: "/admin/donations",
  },
];
