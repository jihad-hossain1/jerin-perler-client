import React from "react";
import useCart from "../../Hooks/useCart";
import { BiCartAlt } from "react-icons/bi";
import { LuPackage, LuTrash2 } from "react-icons/lu";
import Swal from "sweetalert2";
import axios from "axios";
import { MdCreditCard } from "react-icons/md";

const MyCart = () => {
  const [carts, refetch] = useCart();
  // console.log(carts);
  const handleService = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BASE_URL}/carts/${item?._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handlePay = (item) => {
    console.log(item?.price, " pay this service");
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <h4 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        My Cart
      </h4>
      <h4 className="text-2xl font-extralight text-gray-800 mb-10 text-center">
        Total Cart Items: {carts.length || 0}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">
        {carts.map((item, index) => (
          <div
            key={item?._id}
            className="rounded  shadow hover:shadow-md border border-neutral-200 hover:border-pink-300 text-sm"
          >
            <div className="p-3  w-full md:w-full ">
              <div className="">
                <div className="avatar static">
                  <img
                    src={item?.service?.image}
                    className="object-cover rounded  w-12"
                    alt=""
                  />
                  <div className=" absolute ">
                    <button className=" bg-primary  px-2 py-0  text-white rounded shadow-sm">
                      {item?.status}
                    </button>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold">{item?.service?.title}</h4>
              <p className="text-primary font-semibold ">
                ${item?.service?.price}
              </p>
              <p className="break-all">{item?.service?.about}</p>
            </div>
            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="flex justify-between  mb-4">
              <button
                className="px-3 rounded shadow-sm  text-primary "
                onClick={() => handleService(item)}
              >
                <LuTrash2 className="text-2xl drop-shadow hover:drop-shadow-md"></LuTrash2>
              </button>

              <button
                className="px-3 rounded shadow-sm  text-primary "
                onClick={() => handlePay(item)}
              >
                <MdCreditCard className="text-2xl drop-shadow hover:drop-shadow-md"></MdCreditCard>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
