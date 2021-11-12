import React from "react";
import ShowReview from "../../Dashboard/Review/ShowReview/ShowReview";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Bikes />
      <ShowReview />
      <Footer />
    </div>
  );
};

export default Home;
