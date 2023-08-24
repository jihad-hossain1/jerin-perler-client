import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_BB_KEY;

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(data.image);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse);
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          // console.log(imgUrl);
          const { title, price, about, image } = data;
          const newItem = {
            title,
            price: parseFloat(price),
            about,
            image: imgUrl,
          };
          fetch(`${import.meta.env.VITE_BASE_URL}/services`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log('after posting new menus items');
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Service saved DB",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              }
            });
          // console.log(newItem);
        }
      });
  };

  return (
    <div>
      <Toaster />
      <div className="max-w-xl mx-auto px-6">
        <h4 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Add Your Service
        </h4>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="title" className="label label-text">
              Service Title
            </label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              name="title"
              className="input input-bordered"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-base mt-1">
                Please enter your service title.
              </span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="price" className="label label-text">
              Service Price
            </label>
            <input
              type="number"
              placeholder="price"
              id="price"
              name="price"
              className="input input-bordered"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500 text-base mt-1">
                Please enter your service price.
              </span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="price" className="label label-text">
              Service Details
            </label>
            <textarea
              type="text"
              maxLength={400}
              placeholder="about"
              id="about"
              name="about"
              className="input input-bordered min-h-[100px]"
              {...register("about", { required: true, maxLength: 400 })}
            />
            {errors.about && (
              <span className="text-red-500 text-base mt-1">
                Please enter your service Details.
              </span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="image" className="label label-text">
              Photo
            </label>
            <input
              type="file"
              id="image"
              className="file-input file-input-bordered file-input-primary w-full"
              {...register("image", { required: true })}
            />
          </div>
          <div className="mt-5 flex flex-col justify-end items-end">
            <input
              type="submit"
              value="Submit"
              className="px-3 rounded shadow-sm hover:shadow bg-primary text-white cursor-pointer py-1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
