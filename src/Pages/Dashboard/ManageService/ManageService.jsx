import React from "react";
import useAllcarts from "../../../Hooks/useAllcarts";

const ManageService = () => {
  const [cartsAll, refetch] = useAllcarts();
  // console.log(cartsAll);
  const handleStatus = () => {
    console.log("st");
  };

  const handleDelete = (item) => {
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
          .delete(`${import.meta.env.VITE_BASE_URL}/services/${item?._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
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
                  <td>
                    <span className="text-sm text-red-600 border border-red-500 bg-pink-300 bg-opacity-40 rounded-sm px-1 shadow-sm hover:shadow drop-shadow cur">
                      Delete
                    </span>
                    /{" "}
                    <span className="text-sm text-green-600 border border-green-500 bg-green-300 bg-opacity-40 rounded-sm px-1 shadow-sm hover:shadow drop-shadow cur">
                      Update
                    </span>
                  </td>
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
