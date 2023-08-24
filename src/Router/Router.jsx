import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/Services/AllServices";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/LogIn/Register";
import UserCollection from "../Pages/Dashboard/UserCollection";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ManageService from "../Pages/Dashboard/ManageService/ManageService";
import AddService from "../Pages/Dashboard/AddServices/AddService";
import MyCart from "../Pages/MyCart/MyCart";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurTeam from "../Pages/OurTeam/OurTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <AllServices></AllServices>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/ourTeam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "allusers",
        element: <UserCollection></UserCollection>,
      },
      {
        path: "manageService",
        element: <ManageService></ManageService>,
      },
      {
        path: "addService",
        element: <AddService></AddService>,
      },
      {
        path: "mycarts",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default router;
