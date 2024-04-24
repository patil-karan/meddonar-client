import { FaProductHunt } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";

export const menuItemsAdmin = [
  {
    title: "Dashboard",
    icon: BiSolidDashboard,
    path: "/admin",
  },
  {
    title: "Add Products",
    icon: FaProductHunt,
    path: "/admin/product/create",
  },
  {
    title: "Products",
    icon: BiSolidDashboard,
    path: "/admin/products",
  },
  {
    title: "Orders",
    icon: BiSolidDashboard,
    path: "/admin/orders",
  },
];
