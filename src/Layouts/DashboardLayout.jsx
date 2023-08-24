import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button, Drawer, Space } from "antd";
import { AuthContext } from "../Provider/AuthProvider";
import { FaHouseUser, FaIndent } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { LuCopyPlus } from "react-icons/lu";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Space className="lg:hidden flex items-center justify-between">
          <div className="mt-4 ml-2 ">
            <Button type="secondary" onClick={showDrawer}>
              <FaIndent className="text-2xl"></FaIndent>
            </Button>
          </div>
          <div className="text-xl font-semibold pr-5">{user?.displayName}</div>
        </Space>
        <Drawer
          title={user?.displayName}
          // placement={placement}
          placement="left"
          onClose={onClose}
          open={open}
          key={placement}
          width={270}
          // className="w-2/4 "
        >
          <ul className="space-y-6 text-xl">
            <li>
              <NavLink
                to={`/dashboard/manageService`}
                className="flex items-center gap-4 hover:text-pink-600"
              >
                {" "}
                <AiFillSetting className="text-3xl text-pink-600"></AiFillSetting>{" "}
                Manage Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/allusers`}
                className="flex items-center gap-4 hover:text-pink-600"
              >
                <HiUserGroup className="text-3xl text-pink-600"></HiUserGroup>{" "}
                Manage Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`/dashboard/mycarts`}
                className="flex items-center gap-4 hover:text-pink-600"
              >
                {" "}
                <BsFillCartCheckFill className="text-3xl text-pink-600"></BsFillCartCheckFill>{" "}
                My Carts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard`}
                className="flex items-center gap-4 hover:text-pink-600"
              >
                {" "}
                <FaHouseUser className="text-3xl text-pink-600"></FaHouseUser>{" "}
                Dash-Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/addService`}
                className="flex items-center gap-4 hover:text-pink-600"
              >
                {" "}
                <LuCopyPlus className="text-3xl text-pink-600"></LuCopyPlus> Add
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className="flex items-center gap-4 hover:text-pink-600"
              >
                {" "}
                <FaHouseUser className="text-3xl text-pink-600"></FaHouseUser>{" "}
                Back Home
              </NavLink>
            </li>
          </ul>
        </Drawer>
        <div className="lg:hidden py-10 bg-pink-50 bg-opacity-20">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="hidden lg:block ">
        <div className="grid grid-cols-6 gap-2">
          <div className=" min-h-screen border-0 border-r-2 px-5 pt-4">
            <ul className="space-y-6 text-xl">
              <li>
                <NavLink
                  to={`/dashboard/manageService`}
                  className="flex items-center gap-4 hover:text-pink-600"
                >
                  {" "}
                  <AiFillSetting className="text-3xl text-pink-600"></AiFillSetting>{" "}
                  Manage Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/dashboard/allusers`}
                  className="flex items-center gap-4 hover:text-pink-600"
                >
                  <HiUserGroup className="text-3xl text-pink-600"></HiUserGroup>{" "}
                  Manage Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/dashboard/mycarts`}
                  className="flex items-center gap-4 hover:text-pink-600"
                >
                  {" "}
                  <BsFillCartCheckFill className="text-3xl text-pink-600"></BsFillCartCheckFill>{" "}
                  My Carts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/dashboard`}
                  className="flex items-center gap-4 hover:text-pink-600"
                >
                  {" "}
                  <FaHouseUser className="text-3xl text-pink-600"></FaHouseUser>{" "}
                  Dash-Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/dashboard/addService`}
                  className="flex items-center gap-4 hover:text-pink-600"
                >
                  {" "}
                  <LuCopyPlus className="text-3xl text-pink-600"></LuCopyPlus>{" "}
                  Add Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/`}
                  className="flex items-center gap-4 hover:text-pink-600"
                >
                  {" "}
                  <FaHouseUser className="text-3xl text-pink-600"></FaHouseUser>{" "}
                  Back Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-4  w-full min-h-screen py-10 bg-pink-50 bg-opacity-20 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
