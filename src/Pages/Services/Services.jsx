import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <Container>
      <div className="mt-16 md:mt-24 py-8">
        <h2 className="font-bold text-3xl text-center py-8">
          Our Awesome
          <span className="text-[#F63E7B] ml-2">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded drop-shadow-md shadow hover:shadow-lg inline-block p-3 border hover:border-neutral-100 "
            >
              <img src={service?.icon} className="object-cover w-2/12" alt="" />
              <h4 className="font-semibold">{service?.name}</h4>
              <p className="text-[#F63E7B] font-semibold">${service?.price}</p>
              <p className="break-all">{service?.details}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <Link to={`/service`}>
            <button className="bg-[#F63E7B]  hover:bg-[#f81662]  rounded px-6 py-2 shadow text-white font-semibold">
              Expolre More
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Services;
