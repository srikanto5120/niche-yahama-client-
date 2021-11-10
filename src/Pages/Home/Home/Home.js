import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Bikes from "../Bikes/Bikes";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Bikes />
      <Footer />
    </div>
  );
};

export default Home;
