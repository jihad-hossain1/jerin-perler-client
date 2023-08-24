import React, { forwardRef, useRef } from "react";

import avatarImg from "../../../assets/icons/cloud-upload-outline1.png";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
  const formRef = useRef(null);

  return (
    <dialog ref={ref} className="w-[90%] max-w-[500px] rounded-md p-2">
      <div className="text-right mb-4">
        <button
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
          className="hover:text-pink-600 p-4"
        >
          Close
        </button>
      </div>
      <form action="" ref={formRef} onSubmit={handleSubmit} className="p-4">
        <h4 className="text-center text-gray-700 text-xl font-extralight">
          Update Your Profile
        </h4>
        <div>
          <label htmlFor="name" className="label label-text">
            Change Your Name
          </label>
          <input
            defaultValue={updateData?.name}
            type="text"
            className="w-full mb-2 p-2 focus:outline-none border border-primary"
            name="name"
            placeholder="name"
            id=""
          />
        </div>
        <div>
          <label htmlFor="name" className="label label-text">
            Change Your Location
          </label>
          <input
            defaultValue={updateData?.location}
            type="text"
            className="w-full mb-2 p-2 focus:outline-none border border-primary"
            name="location"
            placeholder="location"
            id=""
          />
        </div>
        <div>
          <label htmlFor="name" className="label label-text">
            Change Your Address
          </label>
          <input
            defaultValue={updateData?.address}
            type="text"
            className="w-full mb-2 p-2 focus:outline-none border border-primary"
            name="address"
            placeholder="address"
            id=""
          />
        </div>
        <div className="flex gap-3">
          <div>
            <label htmlFor="photo" className="label label-text">
              Change Your photo
            </label>
            <input
              //   defaultValue={updateData?.photo}
              type="file"
              className="w-full mb-2 p-2 focus:outline-none border border-primary"
              name="photo"
              placeholder="photo"
              id="photo"
            />
          </div>
          <div className="avatar flex flex-col items-center mb-4">
            <img
              src={updateData?.photo || avatarImg}
              className="rounded-xl object-cover w-8 hover:shadow shadow-sm"
              alt=""
            />
            <p className="text-sm">Previous Photo</p>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#F63E7B] px-6 py-2 rounded shadow-sm hover:shadow text-white font-semibold hover:bg-[#f72d70]"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
