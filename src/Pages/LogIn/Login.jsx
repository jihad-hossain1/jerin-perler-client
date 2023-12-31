import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Container from "../../components/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { saveUser } from "../../api/userApi";

const Login = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(saveUser);

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    // console.log("clck");
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        saveUser(result.user);
        // console.log(result);
        if (result) {
          navigate(from, { replace: true });
          reset();
          toast.success("Login Success");
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error.message}`);
      });
  };
  return (
    <div className="py-10">
      <Toaster />
      <div className="mx-5 md:w-2/3 lg:w-2/5 md:mx-auto">
        <div className="border border-neutral-300 px-4 md:px-16 pt-16 pb-8 mt-14">
          <h4 className="text-2xl font-bold py-4">LogIn into account </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="email"
                  name=""
                  placeholder="Username or Email"
                  className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md placeholder-gray-700"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  className="bg-white border-b-[2px]  py-3 px-2 w-full focus:outline-none  focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-md placeholder-gray-700"
                  {...register("password", { required: true })}
                />
                {errors.cpassword && (
                  <span className="text-sm text-red-600">
                    Please Enter a valid password
                  </span>
                )}
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-500 w-full py-3 px-2 text-white rounded"
                >
                  LogIn
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-4">
            <span>You have no account ?</span>{" "}
            <Link
              className="text-pink-600 ml-2 hover:underline"
              to={`/register`}
            >
              Create an account
            </Link>
          </div>
        </div>
        <div className="mx-16">
          <div className="flex items-center mt-8">
            <div className="w-2/4">
              <div className="divider "></div>
            </div>
            <div className="mx-4">OR</div>
            <div className="w-2/4">
              <div className="divider"></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div
              onClick={handleGoogleSignIn}
              className="cursor-pointer hover:shadow flex items-center p-1 rounded-2xl border border-neutral-300 w-full md:w-2/3"
            >
              <FcGoogle className="text-3xl mr-2 md:mr-24"></FcGoogle>{" "}
              <div className="flex items-center">
                <h4>Continue with Google</h4>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow flex items-center p-1 rounded-2xl border border-neutral-300 w-full md:w-2/3">
              <TfiFacebook className="text-3xl mr-2 md:mr-24  text-blue-700"></TfiFacebook>{" "}
              <div className="flex items-center ">
                <h4>Continue with Facebook</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
