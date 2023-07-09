import React from "react";
import imaP from "../../assets/icons/cloud-upload-outline 1.png";

const Container = ({ children }) => {
  return (
    <div className="max-md:w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
