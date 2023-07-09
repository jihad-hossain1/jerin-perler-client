import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../Services/Services";
import HandleProfession from "../../components/HandleProfession/HandleProfession";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="bg-pink-300 bg-opacity-20">
        <HandleProfession></HandleProfession>
      </div>
    </div>
  );
};

export default Home;
