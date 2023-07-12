import React from "react";
import bannerImg from "../../assets/images/banner.png";
import Container from "../Container/Container";
const Banner = () => {
  return (
    <div className="bg-[#fcc2d5] bg-opacity-20 pb-4 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 ">
          <div className="space-y-6">
            <h4 className="text-4xl font-bold uppercase">
              Beauty salon <br /> for every women
            </h4>
            <p className="pb-10 break-all ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, amet!
              Officia quibusdam eum, consectetur eveniet voluptatibus id.
              Quidem, repellat explicabo?
            </p>
            <button className="bg-[#F63E7B] px-6 py-2 rounded shadow-sm hover:shadow text-white font-semibold hover:bg-[#f72d70]">
              Get on Appointment
            </button>
          </div>
          <div className="w-[350px] h-auto md:w-full">
            <img src={bannerImg} className="md:w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
