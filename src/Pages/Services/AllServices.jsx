import React, { useContext } from "react";
import useServices from "../../Hooks/useServices";
import { BiCartAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const AllServices = () => {
  const [services, refetch] = useServices();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (service) => {
    let pending = "pending";
    if (user && user?.email) {
      const cartInfo = {
        service: service,
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
        status: pending,
      };
      fetch(`${import.meta.env.VITE_BASE_URL}/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('after posting new menus items');
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Service add on Cart",
              showConfirmButton: false,
              timer: 1500,
              width: 400,
            });
            reset();
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order a service",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to, LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="min-h-screen">
      <div>
        <h4 className="text-center text-3xl font-extralight mt-3 mb-8">
          Total: {services.length || 0} Available
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">
          {services.map((service, index) => (
            <div key={service._id} className="rounded  shadow hover:shadow-lg">
              <div className=" flex flex-col justify-center items-center p-3  w-full md:w-full ">
                <div className="avatar">
                  <img
                    src={service?.image}
                    className="object-cover w-12 rounded"
                    alt=""
                  />
                </div>
                <h4 className="font-semibold">{service?.title}</h4>
                <p className="text-[#F63E7B] font-semibold ">
                  ${service?.price}
                </p>
                <p className="break-all">{service?.about}</p>
              </div>
              <div className="flex flex-col justify-end items-end mb-4">
                <button
                  // disabled={!user}
                  className="px-3 rounded shadow-sm  text-[#F63E7B] "
                  onClick={() => handleAddToCart(service)}
                >
                  <BiCartAlt className="text-3xl  drop-shadow hover:drop-shadow-md"></BiCartAlt>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
