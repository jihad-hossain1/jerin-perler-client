import useServices from "../../Hooks/useServices";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, refetch] = useServices();
  return (
    <Container>
      <div className="mt-16 md:mt-24 py-8 ">
        <div className="">
          <h2 className="font-bold text-3xl text-center  py-8">
            Our Awesome
            <span className="text-primary ml-2">Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service._id}
              className="rounded  shadow hover:shadow-lg flex flex-col justify-center items-center p-3  w-full md:w-full "
            >
              <div className="avatar">
                <img
                  src={service?.image}
                  className="object-cover w-12 rounded"
                  alt=""
                />
              </div>
              <h4 className="font-semibold">{service?.title}</h4>
              <p className="text-primary font-semibold ">${service?.price}</p>
              <p className="break-all">{service?.about}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to={`/service`}>
            <button className="bg-primary  hover:bg-[#f81662]  rounded px-6 py-2 shadow text-white font-semibold">
              Expolre More
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Services;
