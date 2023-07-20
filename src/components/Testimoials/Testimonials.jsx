import React, { useEffect, useState, useRef } from "react";
import { Rate } from "antd";
import Container from "../Container/Container";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("testdata.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
        // console.log(data)
      });
  }, []);
  // console.log(testimonial);
  return (
    <Container>
      <div className="mt-24">
        <div className="mb-16">
          <h4 className="text-4xl font-bold text-center ">Testimonials</h4>
        </div>

        <div className="">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="py-6 flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={item?.image} />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold">{item?.name}</h4>
                  </div>
                  <p className="break-all">{item?.commants}</p>
                  <Rate disabled defaultValue={item?.rating} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
