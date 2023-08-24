import React from "react";
import useAllcarts from "../../../Hooks/useAllcarts";

const ManageService = () => {
  const [cartsAll, refetch] = useAllcarts();
  // console.log(cartsAll);
  const handleStatus = () => {
    console.log("st");
  };
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 mt-5">
      <h4 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Manage Your Order List
      </h4>
      <h4 className="text-2xl font-extralight text-gray-800 mb-10 text-center">
        Total Order: {cartsAll.length || 0}
      </h4>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {cartsAll.map((item, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <th>{item?.name || "not found!"}</th>
                  <td>{item?.email || "not found!"}</td>
                  <td>{item?.service?.title}</td>
                  <td>Credit Card</td>
                  <td>{item?.status}</td>
                  <td>Delete/Update</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
