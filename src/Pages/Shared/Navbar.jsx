import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import logoImg from "../../assets/logo.png";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";

import {
  HiUser,
  HiOutlineHeart,
  HiCog6Tooth,
  HiShoppingCart,
} from "react-icons/hi2";

import { Dropdown, Space } from "antd";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <Link to={``} className="flex gap-2 items-center">
          <HiOutlineHeart className="text-2xl text-pink-600"></HiOutlineHeart>{" "}
          <span className="">Favorite</span>{" "}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={``} className="flex gap-2 items-center">
          <HiUser className="text-2xl text-pink-600"></HiUser>{" "}
          <span className="">Profile</span>{" "}
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to={`/dashboard`} className="flex gap-2 items-center">
          <HiCog6Tooth className="text-2xl text-pink-600"></HiCog6Tooth>{" "}
          <span className="">Dashboard</span>{" "}
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to={`/dashboard/mycarts`} className="flex gap-2 items-center">
          <HiShoppingCart className="text-2xl text-pink-600"></HiShoppingCart>{" "}
          <span className="">My Cart</span>{" "}
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <button
          onClick={logOut}
          className="border border-pink-500 px-2  rounded shadow font-semibold"
        >
          LogOut
        </button>
      ),
    },
  ];
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
            <div className="flex items-center md:space-x-5 lg:space-x-10 xl:space-x-16">
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
                  to="/ourTeam"
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-pink-600 font-semibold" : "default"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              {user ? (
                <>
                  <div
                    onClick={(e) => e.preventDefault()}
                    className="flex gap-2"
                    title={user?.displayName}
                  >
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottom"
                    >
                      <Space>
                        <div className="avatar cursor-pointer">
                          <div className="w-12 rounded-full">
                            <img
                              src={
                                user?.photoURL || (
                                  <HiUser className="text-4xl text-gray-600"></HiUser>
                                )
                              }
                            />
                          </div>
                        </div>
                      </Space>
                    </Dropdown>
                  </div>
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
                to="/ourTeam"
                className={({ isActive }) =>
                  isActive ? "text-pink-600 font-semibold" : "default"
                }
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-pink-600 font-semibold" : "default"
                }
              >
                Contact Us
              </NavLink>
            </li>
            {user ? (
              <>
                <div
                  onClick={(e) => e.preventDefault()}
                  className="flex gap-2"
                  title={user?.displayName}
                >
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottom"
                  >
                    <Space>
                      <div className="avatar cursor-pointer">
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              user?.photoURL ? (
                                user?.photoURL
                              ) : (
                                <HiUser className="text-4xl text-gray-600"></HiUser>
                              )
                            }
                            alt="user photo"
                          />
                        </div>
                      </div>
                    </Space>
                  </Dropdown>
                </div>
              </>
            ) : (
              <>
                <li className="rounded bg-[#F63E7B] inline-block px-4 py-1 cursor-pointer ">
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
