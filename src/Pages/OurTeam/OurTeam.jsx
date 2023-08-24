import React from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const ourTeam = [
  {
    image: "https://i.ibb.co/YkBpz05/abc-2.jpg",
  },
  { image: "https://i.ibb.co/QmxWCCm/abc-3.jpg" },
  { image: "https://i.ibb.co/87QKhpR/abc-4.jpg" },
  { image: "https://i.ibb.co/bgVXrPW/abc-5.jpg" },
  { image: "https://i.ibb.co/vd95xmm/abc-6.jpg" },
  { image: "https://i.ibb.co/cvzrsm1/abc-7.jpg" },
];

const OurTeam = () => {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        {/* Section: Design Block*/}
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            {ourTeam.map((team, index) => (
              <div className="mb-6 lg:mb-0" key={index}>
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={team?.image} className="w-full rounded-t-lg" />
                    <Link to="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </Link>
                    <svg
                      className="absolute text-white dark:text-neutral-700 left-0 bottom-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold text-gray-900">
                      Maria Smith
                    </h5>
                    <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                      Frontend Developer
                    </p>
                    <ul className="mx-auto flex list-inside justify-center">
                      <Link to="#!" className="px-2">
                        {/* GitHub*/}
                        <FaGithubSquare className="text-2xl text-primary"></FaGithubSquare>
                      </Link>
                      <Link to="#!" className="px-2">
                        {/* Twitter*/}
                        <FaTwitterSquare className="text-2xl text-primary"></FaTwitterSquare>
                      </Link>
                      <Link to="#!" className="px-2">
                        {/* Linkedin*/}
                        <FaLinkedin className="text-2xl text-primary"></FaLinkedin>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section: Design Block*/}
      </div>
    </>
  );
};

export default OurTeam;
