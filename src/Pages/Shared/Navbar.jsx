import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import logoImg from "../../assets/logo.png";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";
import { HiQueueList } from "react-icons/hi2";

import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: <Link to={`/`}>Profile</Link>,
  },
  {
    key: "2",
    label: <Link to={`/`}>Dashboard</Link>,
  },
  {
    key: "3",
    label: (
      <button className="border border-pink-500 px-4 py-1 rounded shadow font-semibold">
        LogOut
      </button>
    ),
  },
];

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-[#fcc2d5] bg-opacity-20">
      <Container>
        <div className="hidden md:block py-8">
          <ul className="flex items-center justify-between">
            <div>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  <img src={logoImg} className="object-cover w-2/4" alt="" />
                </NavLink>
              </li>
            </div>
            <div className="flex items-center space-x-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  Our Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              {user ? (
                <>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <Space>
                      <HiQueueList
                        onClick={(e) => e.preventDefault()}
                        className="text-3xl text-[#F63E7B]"
                      ></HiQueueList>
                    </Space>
                  </Dropdown>
                </>
              ) : (
                <>
                  <li className="rounded bg-[#F63E7B] inline-block px-4 py-2 cursor-pointer ">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "text-white font-semibold" : "text-white"
                      }
                    >
                      LogIn
                    </NavLink>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </Container>

      <div className="md:hidden block">
        <div className="flex items-center px-4 py-6 gap-4">
          <div onClick={showDrawer} className="">
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
          </div>
          <div>
            <img src={logoImg} className="w-2/12" alt="" />
          </div>
        </div>
        <Drawer
          placement="left"
          width={200}
          onClose={onClose}
          open={open}
          // style={{ backgroundColor: "gray" }}
          // className="bg-gray-900"
        >
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink-600 font-semibold" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "text-pink-600 font-semibold" : "default"
                }
              >
                Our Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "text-pink-600 font-semibold" : "default"
                }
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "text-pink-600 font-semibold" : "default"
                }
              >
                Contact Us
              </NavLink>
            </li>
            {user ? (
              <>
                <HiQueueList></HiQueueList>
                <div className="avatar cursor-pointer">
                  <div className="w-14 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>

                <button className="border border-pink-500 px-4 py-1 rounded shadow font-semibold">
                  LogOut
                </button>
              </>
            ) : (
              <>
                <li className="rounded bg-[#F63E7B] inline-block px-4 py-2 cursor-pointer ">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-white"
                    }
                  >
                    LogIn
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
