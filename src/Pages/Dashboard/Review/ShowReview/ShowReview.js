import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useEffect } from "react";

import { Carousel } from "react-bootstrap";
import useAuth from "../../../../Context/useAuth";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://mysterious-crag-45233.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-2">
      <h4 style={{ fontFamily: "Roboto" }} className="py-4 fw-bold text-center">
        Review
      </h4>
      <Carousel className="w-25 border rounded  px-5   bg-white text-center mx-auto">
        {reviews.map((review) => (
          <Carousel.Item>
            <img
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
              className="img-fluid mb-3 mt-2 "
              src={review.img}
              alt="First slide"
            />
            <h4>{review.Name}</h4>
            <p>{review.comment}</p>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ShowReview;
