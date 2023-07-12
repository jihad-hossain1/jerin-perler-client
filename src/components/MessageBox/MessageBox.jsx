import React from "react";
import { useForm } from "react-hook-form";
import Container from "../Container/Container";

const MessageBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      reset();
    }
    console.log(data);
  };

  return (
    <div className="bg-pink-100 mt-24">
      <Container>
        <div className="bg-">
          <div className="py-10 md:py-16">
            <h4 className="text-center text-4xl font-bold">
              Let us handle your <br /> project, professionally.
            </h4>
          </div>
          <form
            action=""
            className="p-6 md:px-64 pt-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white p-4 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md"
                  placeholder="Full Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white p-4 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>This field is required</span>}
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white p-4 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white p-4 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md"
                  placeholder="Phone Number"
                  {...register("number", { required: true })}
                />
                {errors.number && <span>This field is required</span>}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                className="bg-white p-4 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md"
                name="comment"
                {...register("message", { required: true })}
              >
                Enter text here...
              </textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-[#F63E7B] px-6 py-2 rounded shadow-sm hover:shadow text-white font-semibold hover:bg-[#f72d70]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default MessageBox;
