import React from "react";
import { useForm } from "react-hook-form";

import swal from "sweetalert";
import useAuth from "../../../Context/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  console.log(user);
  const onSubmit = (data) => {
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Thanks for review", "You clicked the button!", "success");
        }
      });
    reset();
  };
  return (
    <div id="review">
      <form
        style={{ background: "white", borderRadius: "5px" }}
        className="w-50  mt-5 mx-auto border p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 style={{ fontFamily: "Roboto", color: "555" }}>
          Write something our Website
        </h4>
        <input
          className="form-control  "
          {...register("Name", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          placeholder="image Link"
          className="form-control"
          {...register("img")}
        />
        <br />
        <textarea
          className="form-control"
          type="text"
          {...register("comment")}
        />
        <br />

        <input className="btn btn-primary  " type="submit" value="Review" />
      </form>
    </div>
  );
};

export default Review;
