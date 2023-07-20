import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center md:mt-14">
      <img
        src={user?.photoURL}
        className="w-[200px] rounded-md border p-1 shadow"
        alt=""
      />
      <h2 className="text-xl font-semibold">{user?.displayName}</h2>
    </div>
  );
};

export default DashboardHome;
