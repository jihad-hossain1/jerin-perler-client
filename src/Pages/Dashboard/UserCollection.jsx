import useUsers from "../../Hooks/useUsers";
import { FaTrashCan, FaRegFutbol } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import { useRef, useState } from "react";
import "./hover.css";
import Modal from "./Modal/Modal";
import toast, { Toaster } from "react-hot-toast";
const img_hosting_token = import.meta.env.VITE_BB_KEY;

const UserCollection = () => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const [users, refetch, isLoading, isError] = useUsers();

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const location = form.location.value;
    // const photo = form.photo.value;
    const toastId = toast.loading("Loading....");
    // upload picture
    const image = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const imgFetch = await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    });

    let imgRespons = await imgFetch.json();
    toast.dismiss(toastId);
    toast.success("photo upload successfully");
    imgRespons = imgRespons.data.display_url;

    const upData = {
      location,
      name,
      address,
      photo: imgRespons,
    };
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/${updateData?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(upData),
      }
    );
    const data = await res.json();
    toast.dismiss(toastId);
    // toast.success("User signed in successfully");
    // console.log(data, imageData);
    if (data.modifiedCount || imgRespons) {
      closeModal();
      toast.success("profile updated");

      // isLoading(true);
      refetch();
      // form.reset();
    }
  };

  const handleUserDelete = (item) => {
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
          .delete(`${import.meta.env.VITE_BASE_URL}/users/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleMakeAdmin = (item) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Toaster></Toaster>
      <div>
        <h4 className="text-xl font-semibold text-center">
          Total User: {users?.length || 0}
        </h4>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name & Photo</th>
                <th>Info</th>
                <th>Action</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                        <div className="text-sm opacity-50">
                          {item?.location || <p className="text-sm">Unknown</p>}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item?.address || <p className="text-sm">Unknown</p>}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item?.email}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleUserDelete(item)}
                        className="pl-2 flex items-center gap-2 hover:text-pink-600 "
                      >
                        <FaTrashCan></FaTrashCan> Delete
                      </button>
                      <button
                        onClick={() => openModal(item)}
                        className="pl-2 flex items-center gap-2 hover:text-pink-600"
                      >
                        <FaRegFutbol></FaRegFutbol> Update
                      </button>
                    </div>
                  </td>
                  <th className="">
                    {item?.role === "admin" ? (
                      <p className="text-sm text-green-700 font-semibold">
                        Admin
                      </p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className="border px-1 rounded shadow-sm hover:shadow"
                      >
                        Make Admin
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      ></Modal>
    </>
  );
};

export default UserCollection;
