import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import Dishes from "./Dishes";
import Testimonials from "./Testimonials";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Dishes />
      <Testimonials />
      <Services />
    </div>
  );
};

export default Home;
