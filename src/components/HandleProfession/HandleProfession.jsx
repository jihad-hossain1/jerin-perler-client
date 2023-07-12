import React from "react";
import professionImg from "../../assets/images/banner2.png";
import Container from "../Container/Container";

const HandleProfession = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
        <div>
          <img src={professionImg} className="w-full" alt="" />
        </div>
        <div className="">
          <h4 className="text-2xl font-bold mb-5">
            Let us handle your <br /> screen{" "}
            <span className="text-pink-700">Professionally</span>
          </h4>
          <p className="break-all ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facilis consequatur fugiat aliquid alias nihil corporis doloribus
            quisquam? Temporibus praesentium ut non! Ex, veritatis autem.
          </p>
          <div className="flex space-x-10 items-center mt-28">
            <div>
              <h4 className="text-3xl font-extrabold text-pink-700">500+</h4>
              <p>Happy Customer</p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold text-pink-700">20+</h4>
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HandleProfession;
